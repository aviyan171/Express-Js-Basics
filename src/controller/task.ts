import { NextFunction, Request, Response } from "express";
import { TaskModal as Task } from "../models/index.js";
import { errorResponse, successResponse } from "../constants/index.js";

export const newTask = async (req: any, res: Response) => {
  const { title, description } = req.body;
  await Task.create({
    title,
    description,
    user: req.user,
  });
  successResponse(res, "Task added Successfully", 201);
};

export const myTasks = async (req: any, res: Response) => {
  try {
    const userId = req.user;
    const userTasks = await Task.find({ user: userId });
    if (userTasks) {
      successResponse(res, "User Tasks fetched successfully", 200, userTasks);
    }
  } catch (error) {
    errorResponse(res, "Internal Server Error");
  }
};

export const updateTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { taskId } = req.params;
    const { title, description } = req.body;
    const updatedData = await Task.findOneAndUpdate(
      { _id: taskId },
      { $set: { title, description } },
      { new: true }
    );
    if (!updatedData) {
      return next(new Error("Cannot find Data"));
    } else {
      successResponse(res, "Successfully Updated", 201, updatedData);
    }
  } catch (error) {
    next(new Error("Internal Server error"));
  }
};
export const deleteTasks = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { taskId } = req.params;
    const data = await Task.findOneAndDelete({ _id: taskId });
    if (!data) {
      return next(new Error("Cannot find Data"));
    } else {
      successResponse(res, "Successfully deleted");
    }
  } catch (error) {
    next(new Error("Internal Server error"));
  }
};
