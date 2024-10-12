const express = require("express");
const signupUser = require("../models/model_signUp");

const router = express.Router();

router.post("/", async (req, res) => {
    console.log(req.body.email);
    try {
    const SignupUser = await signupUser.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    if (!SignupUser) {
        res.status(500).json({
            success: false
        });
    }
    console.log(SignupUser);
    res.send(SignupUser);

    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({
            error: err.message,
            success: false
        });
    };
});

module.exports = router;