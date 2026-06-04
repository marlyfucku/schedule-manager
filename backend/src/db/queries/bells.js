export const bellsQueries = {
  getScheduleById: 'SELECT id, name, lessons_in_day as "lessonsInDay", weekdays FROM schedules WHERE id = $1',
  getByScheduleId: `
    SELECT
      id,
      schedule_id as "scheduleId",
      lesson_number as "lessonNumber",
      start_time as "startTime",
      end_time as "endTime"
    FROM bells
    WHERE schedule_id = $1
    ORDER BY lesson_number
  `,

  upsert: `
  INSERT INTO bells(schedule_id, lesson_number, start_time, end_time)
  VALUES($1, $2, $3, $4)
`,
  deleteExtra: 'DELETE FROM bells WHERE schedule_id = $1 AND lesson_number > $2',
};
