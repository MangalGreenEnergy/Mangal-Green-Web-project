const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signup", userController.signup);

// Get all users
router.get("/", userController.getAllUsers);

// Get user by ID
router.get("/:userID", userController.getUserByID);
module.exports = router;
