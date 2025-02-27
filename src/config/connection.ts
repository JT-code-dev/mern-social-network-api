import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialNetworkDB";

// Connect to MongoDB
mongoose.connect(MONGO_URI);

// Log when the connection opens
mongoose.connection.once("open", () => {
  console.log("✅ Connected to MongoDB");
});

// Handle connection errors
mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

export default mongoose.connection;
