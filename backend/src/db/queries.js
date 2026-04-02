export const teachersQueries = {
  getAll: 'SELECT * FROM teachers',
  getById: 'SELECT * FROM teachers WHERE id = $1',
  create: 'INSERT INTO teachers (name, fio, position) VALUES ($1, $2, $3) RETURNING *',
  update: 'UPDATE teachers SET name = $1, short_name = $2, position = $3, color = $4 WHERE id = $5 RETURNING *',
  delete: 'DELETE FROM teachers WHERE id = $1',
}

export const groupsQueries = {
  getAll: 'SELECT * FROM groups',
  getById: 'SELECT * FROM groups WHERE id = $1',
  create: 'INSERT INTO groups (name, color) VALUES ($1, $2) RETURNING *',
  update: 'UPDATE groups SET name = $1, short_name = $2, position = $3, color = $4 WHERE id = $5 RETURNING *',
  delete: 'DELETE FROM groups WHERE id = $1',
}
