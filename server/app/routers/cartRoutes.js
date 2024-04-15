const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/add", cartController.addToCart);
router.get("/", cartController.getAllCarts);
router.get("/:id", cartController.getCartItems);
router.delete("/:id", cartController.removeCartItemById); // New route for deleting cart item

module.exports = router;
