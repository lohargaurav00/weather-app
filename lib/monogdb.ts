import mongoose from "mongoose";

const dbUrl = process.env.MONGO_DB_URL || "";

export async function connectMongoDB() {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
  }
}
