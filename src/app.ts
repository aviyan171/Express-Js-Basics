import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";

export const app = express();

config({
  path: "./src/.env",
});
//using middleware
app.use(express.json()); //middleware that help to access json data on server
app.use(cookieParser());

//using routes
app.use("/users", userRouter);
app.use("/tasks", taskRouter);
