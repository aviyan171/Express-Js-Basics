import { NextFunction, Request, Response } from "express";
import { TaskModal as Task } from "../models/index.js";
import { successResponse } from "../constants/index.js";

export const newTask = async (req: any, res: Response, next: NextFunction) => {
  const { title, description } = req.body;
  console.log(title);
  await Task.create({
    title,
    description,
    user: req.user,
  });
  successResponse(res, "Task added Successfully", 201);
};
