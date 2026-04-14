
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const axios = require("axios");
const { register, login } = require("../controllers/authController");
const User = require("../models/User");

// Existing routes already असतील तर ठेव
// Example:
router.post("/register", register);
router.post("/login", login);


router.post("/google", async (req, res) => {
  try {
    const { access_token } = req.body;

    if (!access_token) {
      return res.status(400).json({ message: "Google access token required" });
    }

    // Get user info from Google
    const googleRes = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const { email, name, picture, sub } = googleRes.data;

    if (!email) {
      return res.status(400).json({ message: "Unable to fetch Google user" });
    }

    // Check existing user
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name: name || "Google User",
        email,
        password: sub + "_google_auth", // dummy password
        profilePic: picture || "",
        authProvider: "google",
        role: "user",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profilePic: user.profilePic || "",
      },
    });
  } catch (error) {
    console.error("Google Login Error:", error.message);
    res.status(500).json({ message: "Google login failed" });
  }
});

module.exports = router;

