export const subjectsQueries = {
  getAll: 'SELECT * FROM subjects ORDER BY name',
  create: 'INSERT INTO subjects (name, abbreviation) VALUES ($1, $2)',
  update: 'UPDATE subjects SET name = $1, abbreviation = $2 WHERE id = $3',
  delete: 'DELETE FROM subjects WHERE id = $1',
};
