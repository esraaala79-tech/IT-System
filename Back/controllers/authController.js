const User = require("../models/User");
const loginSchema = require("./Validation/authValidiation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        msg: error.details.map((err) => err.message),
      });
    }

    const { email, password } = value;

    const exist = await User.findOne({ email });

    if (!exist) {
      return res.status(404).json({ msg: "User not found" });
    }

    const match = await bcrypt.compare(password, exist.password);

    if (!match) {
      return res.status(401).json({ msg: "Invalid password" });
    }

    const token = jwt.sign(
      {
        id: exist._id,
        role: exist.role,
      },
      process.env.JWT_SK,
      {
        expiresIn: "1d",
      }
    );

    exist.password = undefined;

    return res.status(200).json({
      msg: "Login successful",
      token,
      user: exist,
    });

  } catch (err) {
    return res.status(500).json({ msg: "server error" });
  }
};

module.exports = login;