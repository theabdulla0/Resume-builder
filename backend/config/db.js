import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer;

export const connectDB = async () => {
  try {
    console.log("Connecting to remote MongoDB...");
    // Use a 5-second timeout for server selection so we don't hang if Atlas is unreachable
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log(process.env.MONGO_URL);
    console.log(`▶️  MongoDB connected (Remote)`);
  } catch (error) {
    console.warn(`⚠️ Remote MongoDB connection failed (${error.message}).`);
    console.log("Starting local In-Memory MongoDB server fallback...");
    try {
      mongoServer = await MongoMemoryServer.create();
      const mongoUri = mongoServer.getUri();
      const conn = await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`▶️  MongoDB connected (In-Memory Local Fallback) at ${mongoUri}`);
    } catch (fallbackError) {
      console.error(`❌ Failed to start local In-Memory MongoDB: ${fallbackError.message}`);
    }
  }
}
