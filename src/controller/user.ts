import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModal } from "../models/index.js";
import { setCookie } from "../utils/index.js";

export const getAllUser = async (req: Request, res: Response) => {};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  let user = await UserModal.findOne({ email });
  if (user)
    return res.status(404).json({
      success: false,
      message: "User already exists",
    });
  const hassedPassword = await bcrypt.hash(password, 10);
  user = await UserModal.create({
    name,
    email,
    password: hassedPassword,
  });
  setCookie(res, user._id as string, "Registerd Successfully", 201);
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const user = await UserModal.findOne({ email }).select("+password");
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Invalid email or password",
    });
  }
  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) {
    return res.status(404).json({
      success: false,
      message: "Invalid email or password",
    });
  }
  setCookie(res, user?._id as string, `Welcome back ${user?.name}`);
};

export const getUserDetail = async (req: Request, res: Response) => {};
