const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    productID: { type: String, required: true, unique: true }, // Make productID unique
    quantity: { type: Number, required: true },
},{ collection: 'Cart' });

module.exports = mongoose.model("Cart", cartSchema);
