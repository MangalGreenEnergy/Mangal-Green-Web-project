// models/Product.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ProductID: { type: Number, required: true, unique: true },
  Name: { type: String, required: true },
  Category: String,
  Brand: String,
  Rating: Number,
  Stock: Number,
  Thumbnail: String,
  Price: Number,
  DiscountPercent: Number,
  DiscountedPrice: Number,
  Description: String
},{ collection: 'Products' });

module.exports = mongoose.model("Products", productSchema);
