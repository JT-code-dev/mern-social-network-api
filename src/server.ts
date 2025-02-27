import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialNetworkDB";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

mongoose.connection.once("open", () => {
  console.log("✅ Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

