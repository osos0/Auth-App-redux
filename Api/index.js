import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user-route.js";
import authRouter from "./routes/auth-route.js";
dotenv.config({ path: "../.env" });

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Data Base is connecting");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, (req, res) => {
  console.log(`server is working on port ${"http://localhost:5000"}`);
});

app.use("/api/user", userRoutes);
app.use("/api/user", authRouter);
