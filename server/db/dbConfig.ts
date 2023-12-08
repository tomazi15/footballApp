import mongoose from "mongoose";

let mongoUrl: string;

const connectToMongoDB = async (): Promise<void> => {
  try {
    if (process.env.MONGO_CLOUD_ATLAS_URL) {
      mongoUrl = process.env.MONGO_CLOUD_ATLAS_URL;
    } else {
      throw new Error("MONGO_CLOUD_ATLAS_URL is not set.");
    }

    const connection = await mongoose.connect(mongoUrl);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error: unknown) {
    const err = error as Error;
    console.log(`Error connecting to MongoDB: ${err.message}`);
  }
};

export default connectToMongoDB;
