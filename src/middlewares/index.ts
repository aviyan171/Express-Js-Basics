import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../constants/index.js";
import { decodeJWT } from "../utils/index.js";
import { UserModal } from "../models/index.js";

export const isAuthenticated = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies;
  if (!token) {
    return errorResponse(res, "You are not authenticated, Please login first");
  }
  const decodedJwt = decodeJWT(token);
  const userDetails = await UserModal.findById(decodedJwt);
  req.user = userDetails;
  next();
};
