import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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

app.listen(5000, () => {
  console.log(`server is working on port ${"http://localhost:5000"}`);
});
