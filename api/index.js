import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// configuring dot env file
dotenv.config();

// mongoose data connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};
// It will try to reconnect again and again if disconnected
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

// middlewares
app.use(cors());
app.use(express.json());
// for maintaining cookie
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);
// to handle any errors in middlwares and connection
app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something Went Wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

// demo code
app.get("/", (req, res) => {
  res.send("Running!!");
});
app.listen(process.env.PORT, () => {
  connect();
  console.log("Hello World");
});
