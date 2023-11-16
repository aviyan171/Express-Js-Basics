import { Response } from "express";

export const errorResponse = (
  res: Response,
  message: string,
  statusCode = 400
) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};
export const successResponse = (
  res: Response,
  message: string,
  statusCode = 200,
  response?: any
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    ...(response && { data: response }),
  });
};

export const logoutResponse = (res: Response) => {
  return res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Successfully logged out",
    });
};
