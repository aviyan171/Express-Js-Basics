import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

console.log("");

config({
  path: "./src/.env",
});
app.use(express.json()); //middleware that help to access json data on server

app.use("/users", userRouter);
