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

export const createModal = (
  collectionName: string,
  schemaName: mongoose.Schema
) => {
  return mongoose.model(collectionName, schemaName);
};
