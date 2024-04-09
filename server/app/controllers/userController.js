// controllers/userController.js
const userService = require("../services/userService");

exports.signup = async (req, res) => {
  try {
    const { UserID, UserName, Email, Password, Role, FullAddress, City, State, Pincode } = req.body;
    const newUser = await userService.signup({
      UserID,
      UserName,
      Email,
      Password,
      Role,
      FullAddress,
      City,
      State,
      Pincode
    });
    console.log("User signed up successfully:", newUser);
    res.status(201).send("User signed up successfully");
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).send("Error signing up user");
  }
};
// Get all users
exports.getAllUsers = async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error getting users:", error);
      res.status(500).send("Error getting users");
    }
  };
  
  // Get user by ID
  exports.getUserByID = async (req, res) => {
    const { userID } = req.params;
    try {
      const user = await userService.getUserByID(userID);
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).json(user);
    } catch (error) {
      console.error("Error getting user:", error);
      res.status(500).send("Error getting user");
    }
  };