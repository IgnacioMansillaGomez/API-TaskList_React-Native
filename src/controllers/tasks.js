import { connect } from "../db";

export const getTasks = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT * FROM tasks");
  res.json(rows);
};

export const getCountTasks = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT COUNT(*) FROM tasksnativedb.tasks");
  res.json(rows[0]["COUNT(*)"]);
};

export const getOneTask = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query("SELECT * FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  res.json(rows);
};

export const createTask = async (req, res) => {
  const db = await connect();
  const result = db.query(
    "INSERT INTO tasks (title,description) VALUES (?,?)",
    [req.body.title, req.body.description]
  );

  res.json({
    id: result.insertId,
    ...req.body,
  });
};

export const deleteTask = async (req, res) => {
  const db = await connect();
  db.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
  res.sendStatus(204);
};

export const updateTask = async (req, res) => {
  const db = await connect();
  await db.query("UPDATE tasks SET ? WHERE id = ?", [req.body, req.params.id]);
  res.sendStatus(204);
};
