const User = require("../models/User");
const bcrypt = require("bcrypt");

// add user
const addUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // check if user exists
    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    // remove password from response
    const safeUser = await User.findById(newUser._id).select("-password");

    return res.status(201).json({
      message: "User created successfully",
      user: safeUser,
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = addUser;