-- Добавить колонку color в таблицу groups
ALTER TABLE groups ADD COLUMN IF NOT EXISTS color VARCHAR(50);
