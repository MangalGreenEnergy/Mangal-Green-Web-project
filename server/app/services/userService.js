const User = require("../models/User");

exports.signup = async (userData) => {
  const newUser = new User(userData);
  await newUser.save();
};
