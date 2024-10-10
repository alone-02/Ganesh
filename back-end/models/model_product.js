const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: String,
    image: String,
    title: String,
    price: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;