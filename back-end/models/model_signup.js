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
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String},
        country: { type: String }
    },
    password: {
        type: String,
        required: true
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

const signupUser = mongoose.model("signUser", userSchema);

module.exports = signupUser;
