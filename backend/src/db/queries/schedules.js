export const schedulesQueries = {
  getAll: 'SELECT id, name, created, lessons_in_day as "lessonsInDay", weekdays, start_date, updated_at, type FROM schedules ORDER BY id',
  create: `
    INSERT INTO schedules (name, lessons_in_day, type, start_date, weekdays)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id
  `,
  update: 'UPDATE schedules SET name = $1, lessons_in_day = $2, type = $3, start_date = $4, weekdays = $5 WHERE id = $6',
  delete: 'DELETE FROM schedules WHERE id = $1',
};
