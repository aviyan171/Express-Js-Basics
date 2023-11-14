import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "backendApi",
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.log(error);
  }
};
