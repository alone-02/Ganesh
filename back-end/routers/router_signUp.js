const express = require("express");
const signupUser = require("../models/model_signUp");
//const User = require("../models/model_signup");

const router = express.Router();



router.post("/", async (req, res) => {
  console.log(req.body.name);
  const SignupUser = new signupUser({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: { city: req.body.address },
    password: req.body.password,
  });

  try {
    const createdUser = await SignupUser.save();
    res.status(201).json(createdUser);
  } catch (err) {
    console.error("Error Reg User:", err);
    res.status(500).json({
      error: err.message,
      success: false,
    });
  }
});

module.exports = router;
