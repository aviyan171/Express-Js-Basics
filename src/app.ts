import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
  path: "./src/.env",
});
//using middleware
app.use(express.json()); //middleware that help to access json data on server

//using routes
app.use("/users", userRouter);
