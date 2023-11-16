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
  response: any
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data: response,
  });
};
