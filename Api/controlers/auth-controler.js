import UsersDB from "../models/usaer-model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  //   console.log(req.body);

  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new UsersDB({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User Has created sucessfuly" });
  } catch (error) {
    res.status(500).json({ message: "User or Password has existed" });
  }
};
export const signin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  const userFind = await UsersDB.findOne({ email });
  try {
    if (!userFind) {
      return res.json({ message: "Email Or Username doesn't exist" });
    }
    const isPasswordVaild = bcryptjs.compareSync(password, userFind.password);
    if (!isPasswordVaild) {
      return res.json({ message: "Username or password is not correct" });
    }

    const token = jwt.sign({ id: userFind._id }, process.env.JWT_SECRET);
    const expiryCookiDate = new Date(Date.now() + 3600000);

    // hide the password from server side
    const { password: hashedPassword, ...rest } = userFind._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: expiryCookiDate,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    res.status(500).json({ message: "Somthing went wrong" });
  }

  // return res.json("yes");
};
