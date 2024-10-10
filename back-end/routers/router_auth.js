const express = require("express");
const Product = require("../models/model_users");
const User = require("../models/model_users");

const router = express.Router();

router.get("/login", async (req, res) => {
    try {
        
    } catch (err) {
        
    }
});

router.post("/signup", async (req, res) => {
    const user = new User({
        id: req.body.id,
        image: req.body.image,
        title: req.body.title,
        price: req.body.price,
    });

    try {
        const createdUser = await user.save();
        res.status(201).json(createdUser);

    } catch (err) {
        console.error("Error Reg User:", err);
        res.status(500).json({
            error: err.message,
            success: false
        });
    };
});

module.exports = router;