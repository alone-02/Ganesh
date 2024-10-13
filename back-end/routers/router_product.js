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

router.post("/idol", async (req, res) => {
   const {title, thumbnail, price, stock} = req.body;
   console.log("Request body:", req.body.title);

    const product = new Product({
        title: title,
        thumbnail: {
            image_url: thumbnail,
        },
        price : price,
        stock: stock,
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