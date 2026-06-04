import { createGroup, deleteGroup, getGroups, updateGroup } from '../controllers/groups.js';

export default async function teachersRoutes(fastify) {
  // admin
  fastify.get('/groups', async (req, reply) => {
    const groups = await getGroups(fastify);
    reply.send(groups);
  });

  fastify.get('/groups/lessons', async (req, reply) => {
    const { id, date } = req.query;

    const client = await fastify.pg.connect();
    try {
      const { rows: lessons } = await client.query(`
      SELECT 
        pl.weekday,
        pl.lesson_number,
        pl.classroom,
        pl.group_id,
        pl.group_name,
        pl.teacher_name,
        pl.subject_name,
        pl.subject_abbr,
        pl.start_time,
        pl.end_time
      FROM published_lessons pl
      JOIN schedules s ON pl.schedule_id = s.id
      WHERE pl.group_id = $1
        AND s.start_date <= $2::date
      ORDER BY pl.weekday, pl.lesson_number
    `, [id, date]);

      reply.send(lessons);
    }
    catch (error) {
      console.error('Error fetching lessons:', error);
      reply.status(500).send({ error: error.message });
    }
    finally {
      client.release();
    }
  });

  fastify.post('/groups', async (req, reply) => {
    const result = await createGroup(fastify, req.body);
    reply.status(201).send(result);
  });

  fastify.delete('/groups', async (req, reply) => {
    const groupId = req.body;
    const result = await deleteGroup(fastify, groupId);
    reply.status(201).send(result);
  });

  fastify.put('/groups', async (req, reply) => {
    const id = req.body;
    const result = await updateGroup(fastify, id);
    reply.status(201).send(result);
  });
}
