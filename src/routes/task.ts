import express from "express";
import {
  deleteTasks,
  myTasks,
  newTask,
  updateTasks,
} from "../controller/task.js";
import { isAuthenticated } from "./../middlewares/index.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);
router.get("/my-tasks", isAuthenticated, myTasks);
router
  .route("/:taskId")
  .put(isAuthenticated, updateTasks)
  .delete(isAuthenticated, deleteTasks);

export default router;
