const express = require("express");
const Product = require("../models/model_product");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const productList = await Product.find();
        if (!productList) {
            res.status(500).json({
                success: false
            });
        }
        res.send(productList);
    } catch (err) {
        console.log("Server error", err);
        res.status(500).json({
            error: err.message,
            success: false
        });
    }
});

router.post("/api/products", async (req, res) => {
    const product = new Product({
        id: req.body.id,
        image: req.body.image,
        title: req.body.title,
        price: req.body.price,
    });

    try {
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);

    } catch (err) {
        console.error("Error saving product:", err);
        res.status(500).json({
            error: err.message,
            success: false
        });
    };
});

module.exports = router;