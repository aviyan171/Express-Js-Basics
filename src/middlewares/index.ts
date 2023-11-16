import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../constants/index.js";
import { decodeJWT } from "../utils/index.js";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies;
  if (!token) {
    return errorResponse(res, "You are not authenticated, Please login first");
  }
  const decodedJwt = decodeJWT(token);
  if (decodedJwt) {
    next();
  }
};
