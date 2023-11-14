import mongoose from "mongoose";
import { taskSchema, userSchema } from "../schema/index.js";
import { createModal } from "../utils/index.js";

export const UserModal = createModal("User", userSchema);
export const TaskModal = createModal("Task", taskSchema);
