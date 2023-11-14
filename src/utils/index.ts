import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { Response } from "express";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "backendApi",
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export const createModal = (
  collectionName: string,
  schemaName: mongoose.Schema
) => {
  return mongoose.model(collectionName, schemaName);
};

export const setCookie = (
  res: Response,
  id: string,
  message: string,
  statusCode = 200
) => {
  const token = jwt.sign({ _id: id }, process.env.JWT_SECRET!);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    })
    .json({
      success: true,
      message,
    });
};
