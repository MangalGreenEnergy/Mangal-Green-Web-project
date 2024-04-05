const userService = require("../services/userService");

exports.signup = async (req, res) => {
  try {
    await userService.signup(req.body);
    res.status(201).send("User signed up successfully");
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).send("Error signing up user");
  }
};
