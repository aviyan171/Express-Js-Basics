import { Request, Response } from "express";
import { UserModal } from "../models/index.js";

export const getAllUser = async (req: Request, res: Response) => {
  const users = await UserModal.find({});
  const { category } = req.query;
  console.log(category);
  res.json({
    success: true,
    users: {
      users,
    },
  });
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  await UserModal.create({
    name,
    email,
    password,
  });
  res.status(201).cookie("sdsd", "lol").json({
    success: true,
    message: "Signed up successfully",
  });
};

export const getUserDetail = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const data = await UserModal.findById(userId);
  res.status(201).json({
    success: true,
    user: data,
  });
};

export const editUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { name, email } = req.body;

    const updatedUser = await UserModal.findOneAndUpdate(
      { _id: userId },
      { $set: { name, email } },
      { new: true } // Returns the modified document rather than the original
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      user: updatedUser,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const findUser = await UserModal.findById(userId);
    if (findUser) {
      await UserModal.deleteOne({ _id: userId });
      res.json({
        success: true,
        message: "User deleted successfully",
      });
    } else {
      res.json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, message: "Internal Server Error" });
  }
};
