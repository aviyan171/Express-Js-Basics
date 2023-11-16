import { isAuthenticated } from "./../middlewares/index.js";
import express from "express";
import { newTask } from "../controller/task.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);

export default router;
