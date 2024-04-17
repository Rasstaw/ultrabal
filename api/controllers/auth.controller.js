import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  //db operations
  const { username, email, password } = req.body;
  try {
    //hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    //creating a new user and saving it to database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "user created successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to create user!" });
  }
};
export const login = async (req, res) => {
  //dboperations
  const { username, password } = req.body;

  try {
    //checking if the user exists
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    //checking if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //generating cookie token and sending it to the client
    //res.setHeader("Set-cookie", "test" + "cookieval").json("sucess!");
    const age = 1000 * 60 * 60 * 24 * 7;

    //generating token
    const token = jwt.sign(
      {
        id: user.userid,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;
    res
      .cookie("token", token, {
        httpOnly: true,
        //secure: true
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to login" });
  }
};
export const logout = async (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout successful!" });
};
