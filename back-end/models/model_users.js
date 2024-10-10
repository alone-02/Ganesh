const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true }
    },
    cart: {
        items: [
            {
                prouductId: {
                    type: Schema.Types.ObjectId,
                    ref: "mode_product",
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1
                },
            },
        ],
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
