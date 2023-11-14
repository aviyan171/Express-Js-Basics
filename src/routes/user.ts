import express from "express";
import {
  registerUser,
  getAllUser,
  getUserDetail,
  login,
} from "../controller/user.js";

const router = express.Router();

router.get("/all", getAllUser);

router.post("/create", registerUser);

router.post("/login", login);

//always try to keep dynamic route atb last
router.route("/:userId").get(getUserDetail);
export default router;
