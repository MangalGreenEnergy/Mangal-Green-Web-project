// services/userService.js
const User = require("../models/User");

exports.signup = async (userData) => {
  try {
    const newUser = new User(userData);
    return await newUser.save();
  } catch (error) {
    throw error;
  }
};
// Get all users
exports.getAllUsers = async () => {
  return await User.find();
};

// Get user by ID
exports.getUserByID = async (userID) => {
  return await User.findById(userID);
};