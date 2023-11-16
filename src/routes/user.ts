import { isAuthenticated } from "../middlewares/index.js";
import express from "express";
import {
  registerUser,
  getAllUser,
  getUserDetail,
  login,
  logout,
} from "../controller/user.js";

const router = express.Router();

router.get("/all", getAllUser);

router.post("/create", registerUser);

router.post("/login", login);

router.get("/logout", logout);
//always try to keep dynamic route atb last
router.route("/:userId").get(isAuthenticated, getUserDetail);
export default router;
