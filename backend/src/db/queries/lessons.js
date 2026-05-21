export const lessonsQueries = {
  // Получить все размещённые уроки
  getAll: `
    SELECT
      sl.id as "scheduledLessonId",
      sl.schedule_id as "scheduleId",
      sl.workload_id as "workloadId",
      sl.weekday,
      sl.lesson_number as "lessonNumber",
      sl.classroom,
      w.group_id as "groupId",
      g.name as "groupName",
      g.abbreviation as "groupAbbr",
      w.teacher_id as "teacherId",
      t.fio as "teacherName",
      t.position as "teacherPosition",
      w.subject_id as "subjectId",
      s.name as "subjectName",
      s.abbreviation as "subjectAbbr",
      w.lessons_per_week as "lessonsPerWeek"
    FROM schedule_lessons sl
    JOIN workloads w ON sl.workload_id = w.id
    JOIN groups g ON w.group_id = g.id
    JOIN teachers t ON w.teacher_id = t.id
    JOIN subjects s ON w.subject_id = s.id
    ORDER BY sl.schedule_id, g.name, sl.weekday, sl.lesson_number
  `,

  // Получить уроки по конкретному расписанию
  getByScheduleId: `
  SELECT
    sl.id as "scheduledLessonId",
    sl.schedule_id as "scheduleId",
    sl.workload_id as "workloadId",
    sl.weekday,
    sl.lesson_number as "lessonNumber",
    sl.classroom,
    w.group_id as "groupId",
    g.name as "groupName",
    g.abbreviation as "groupAbbr",
    w.teacher_id as "teacherId",
    t.fio as "teacherName",
    t.position as "teacherPosition",
    w.subject_id as "subjectId",
    s.name as "subjectName",
    s.abbreviation as "subjectAbbr",
    w.lessons_per_week as "lessonsPerWeek"
  FROM schedule_lessons sl
   JOIN workloads w ON sl.workload_id = w.id
   JOIN groups g ON w.group_id = g.id
   JOIN teachers t ON w.teacher_id = t.id
   JOIN subjects s ON w.subject_id = s.id
  WHERE sl.schedule_id = $1
  ORDER BY g.name, sl.weekday, sl.lesson_number
`,

  // Создать урок в расписании
  create: `
    INSERT INTO schedule_lessons (workload_id, schedule_id, weekday, lesson_number, classroom)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id
  `,

  // Обновить урок в расписании
  update: `
    UPDATE schedule_lessons
    SET workload_id = $1, classroom = $2, updated_at = CURRENT_TIMESTAMP
    WHERE id = $3
    RETURNING id
  `,

  // Удалить урок из расписания
  delete: 'DELETE FROM schedule_lessons WHERE id = $1',

  // Найти урок по ячейке
  findByCell: `
  SELECT sl.id
  FROM schedule_lessons sl
  JOIN workloads w ON sl.workload_id = w.id
  WHERE sl.schedule_id = $1
    AND sl.weekday = $2
    AND sl.lesson_number = $3
    AND w.group_id = $4
`,

  // Удалить урок по ячейке
  deleteByCell: `
    DELETE FROM schedule_lessons
    WHERE schedule_id = $1 AND weekday = $2 AND lesson_number = $3
  `,
};
