// const mongoose = require("mongoose");
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// member = name of the data in mongoosedb
const User = mongoose.model("User", UserSchema);

export default User;
// module.exports = User;
