export const schedulesQueries = {
  getAll: 'SELECT id, name, created, lessons_in_day as "lessonsInDay", weekdays FROM schedules ORDER BY id',
  create: `
    INSERT INTO schedules (name, lessons_in_day, weekdays)
    VALUES ($1, $2, $3)
    RETURNING id, lessons_in_day as "lessonsInDay"
  `,
  update: 'UPDATE schedules SET name = $1, lessons_in_day = $2, weekdays = $3 WHERE id = $4',
  delete: 'DELETE FROM schedules WHERE id = $1',
};
