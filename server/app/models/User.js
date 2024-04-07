// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  UserID: { type: Number, required: true },
  UserName: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  Role: { type: String, enum: ['admin', 'user'], required: true },
  FullAddress: { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
  Pincode: { type: String, required: true }
},{ collection: 'Configure' });

module.exports = mongoose.model("Configure", userSchema);
