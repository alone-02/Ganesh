const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    image_url: {
      type: String,
      required: true,
    },
  },
  price: {
    type: String,
    required: true,
  },
  stock:{
    type: String,
    required: true,
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
