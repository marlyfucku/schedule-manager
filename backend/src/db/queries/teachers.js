export const teachersQueries = {
  getAll: 'SELECT * FROM teachers',
  create: 'INSERT INTO teachers (name, fio, position) VALUES ($1, $2, $3) RETURNING *',
  update: 'UPDATE teachers SET name = $1, fio = $2, position = $3 WHERE id = $4 RETURNING *',
  delete: 'DELETE FROM teachers WHERE id = $1',
};
