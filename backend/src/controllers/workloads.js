// controllers/workloads.js
import { workloadsQueries } from '../db/queries/workloads.js';

export const getWorkloadByScheduleId = async (fastify, scheduleId) => {
  const client = await fastify.pg.connect();
  try {
    const { rows } = await client.query(workloadsQueries.getByScheduleId, [scheduleId]);
    return rows;
  }
  finally {
    client.release();
  }
};

export const createWorkload = async (fastify, data) => {
  const client = await fastify.pg.connect();
  try {
    const result = await client.query(workloadsQueries.create, [
      data.scheduleId,
      data.groupId,
      data.teacherId,
      data.subjectId,
      data.lessonsPerWeek,
    ]);
    return { message: 'Нагрузка добавлена!', id: result.rows[0]?.id };
  }
  catch (error) {
    console.error('Error creating workload:', error);
    return { type: 'error', message: error.message };
  }
  finally {
    client.release();
  }
};

export const updateWorkload = async (fastify, data) => {
  const client = await fastify.pg.connect();
  try {
    await client.query(workloadsQueries.update, [
      data.groupId,
      data.teacherId,
      data.subjectId,
      data.lessonsPerWeek,
      data.id,
    ]);
    return { message: 'Нагрузка обновлена!' };
  }
  catch (error) {
    console.error('Error updating workload:', error);
    return { type: 'error', message: error.message };
  }
  finally {
    client.release();
  }
};

export const decrementWorkload = async (fastify, workloadId) => {
  const client = await fastify.pg.connect();
  try {
    const { rows: [workload] } = await client.query(
      'SELECT lessons_per_week FROM workloads WHERE id = $1',
      [workloadId]
    );

    console.log('Текущее значение:', workload?.lessons_per_week);

    if (!workload) {
      return { type: 'error', message: 'Нагрузка не найдена' };
    }

    // В decrementWorkload
    if (workload.lessons_per_week === 1) {
      // Просто обнуляем до 0, НЕ УДАЛЯЕМ
      await client.query('UPDATE workloads SET lessons_per_week = 0 WHERE id = $1', [workloadId]);
      return { type: 'success', message: 'Нагрузка полностью использована' };
    }

    // Уменьшаем на 1
    const { rows: [updated] } = await client.query(
      'UPDATE workloads SET lessons_per_week = lessons_per_week - 1 WHERE id = $1 RETURNING lessons_per_week',
      [workloadId]
    );

    console.log('После уменьшения:', updated.lessons_per_week);

    // Если после уменьшения стало 0 — удаляем
    if (updated.lessons_per_week === 0) {
      await client.query('DELETE FROM workloads WHERE id = $1', [workloadId]);
      return {
        type: 'success',
        message: 'Нагрузка полностью использована и удалена'
      };
    }

    return {
      type: 'success',
      message: 'Количество оставшихся пар: ' + updated.lessons_per_week
    };
  }
  catch (error) {
    console.error('Error:', error);
    return { type: 'error', message: error.message };
  }
  finally {
    client.release();
  }
};

export const deleteWorkload = async (fastify, workloadId) => {
  const client = await fastify.pg.connect();
  try {
    await client.query(workloadsQueries.delete, [workloadId]);
    return { message: 'Нагрузка удалена!' };
  }
  catch (error) {
    console.error('Error deleting workload:', error);
    return { type: 'error', message: error.message };
  }
  finally {
    client.release();
  }
};
