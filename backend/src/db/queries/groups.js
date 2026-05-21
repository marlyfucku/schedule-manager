export const groupsQueries = {
  getAll: `
    SELECT
      id,
      name,
      abbreviation,
      year_of_admission as "yearOfAdmission"
    FROM groups
    ORDER BY id
  `,
  create: 'INSERT INTO groups (name, year_of_admission, abbreviation) VALUES ($1, $2, $3) RETURNING *',
  update: 'UPDATE groups SET name = $1, abbreviation = $2, year_of_admission = $3 WHERE id = $4 RETURNING *',
  delete: 'DELETE FROM groups WHERE id = $1',
};
