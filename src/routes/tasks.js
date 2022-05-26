import { Router } from "express";
import {
  getTasks,
  getOneTask,
  getCountTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks";

const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/count", getCountTasks);

router.get("/tasks/:id", getOneTask);

router.post("/tasks", createTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

export default router;
