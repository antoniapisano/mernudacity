const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel.js")


const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
  
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }
  
    // Check if user exists
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    // Create user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      token: generateToken(user._id),
    });
  
    if (user) {
      res.status(201).json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  });



const loginUser = asyncHandler (async(req,res) => {
    res.json({message: "login User"})
})

const getMe = asyncHandler (async(req,res) => {
    res.json({message: "get me"})
})



module.exports = { registerUser, loginUser, getMe }
