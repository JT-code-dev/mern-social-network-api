import express from "express";
import dotenv from "dotenv";
import "./config/connection";
import routes from "./routes/index";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("✅ Registering API routes... working yet?");
app.use("/api", routes); // root for API routes
console.log("✅ Routes registered at /api. . . are they working yet?");

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
