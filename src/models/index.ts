import mongoose from "mongoose";
import { userSchema } from "../schema/index.js";

export const UserModal = mongoose.model("User", userSchema);
