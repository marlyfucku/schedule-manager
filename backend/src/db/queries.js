export const teachersQueries = {
  getAll: 'SELECT * FROM teachers',
  getById: 'SELECT * FROM teachers WHERE id = $1',
  create: 'INSERT INTO teachers (name, short_name, position, color) VALUES ($1, $2, $3, $4) RETURNING *',
  update: 'UPDATE teachers SET name = $1, short_name = $2, position = $3, color = $4 WHERE id = $5 RETURNING *',
  delete: 'DELETE FROM teachers WHERE id = $1',
}
