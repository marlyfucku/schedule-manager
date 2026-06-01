export const publicationsQueries = {
  deleteAllPublished: `
    DELETE FROM published_lessons
  `,

  insertPublishedLessons: `
    INSERT INTO published_lessons (
      public_id, schedule_id, schedule_name,
      weekday, lesson_number, classroom,
      group_id, group_name,
      teacher_id, teacher_name,
      subject_id, subject_name, subject_abbr
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
  `,

  getPublishedSchedules: `
    SELECT DISTINCT
      schedule_id,
      schedule_name,
      public_id,
      MIN(published_at) as published_at
    FROM published_lessons
    GROUP BY schedule_id, schedule_name, public_id
    ORDER BY published_at DESC
  `,

  getPublishedLessons: `
    SELECT 
      weekday, lesson_number, classroom,
      group_id, group_name,
      teacher_id, teacher_name,
      subject_id, subject_name, subject_abbr
    FROM published_lessons
    WHERE public_id = $1
    ORDER BY group_name, weekday, lesson_number
  `,
};