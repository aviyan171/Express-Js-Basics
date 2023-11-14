import express from "express";
import {
  registerUser,
  deleteUser,
  editUser,
  getAllUser,
  getUserDetail,
} from "../controller/user.js";

const router = express.Router();

router.get("/all", getAllUser);

router.post("/create", registerUser);

//always try to keep dynamic route atb last
router.route("/:userId").get(getUserDetail).put(editUser).delete(deleteUser);
export default router;
