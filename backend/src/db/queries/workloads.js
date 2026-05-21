export const workloadsQueries = {
  findById: `
    SELECT lessons_per_week FROM workloads WHERE id = $1
  `,
  getByScheduleId: `
    SELECT
      w.id as "workloadId",
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
    FROM workloads w
    JOIN groups g ON w.group_id = g.id
    JOIN teachers t ON w.teacher_id = t.id
    JOIN subjects s ON w.subject_id = s.id
    WHERE w.schedule_id = $1
    ORDER BY g.name, s.name
  `,

  create: `
  INSERT INTO workloads (schedule_id, group_id, teacher_id, subject_id, lessons_per_week)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING id
  `,

  update: `
    UPDATE workloads
    SET group_id = $1,
        teacher_id = $2,
        subject_id = $3,
        lessons_per_week = $4,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = $5
  `,

  decrementWorkload: `
  UPDATE workloads
  SET lessons_per_week = lessons_per_week - 1,
      updated_at = CURRENT_TIMESTAMP
  WHERE id = $1
  RETURNING lessons_per_week
`,

  delete: 'DELETE FROM workloads WHERE id = $1',
};
