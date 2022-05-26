import express from "express";
import cors from "cors";

import tasksRoutes from "./routes/tasks";

const app = express();

app.use(cors());
app.use(express.json());

app.use(tasksRoutes);

export default app;
