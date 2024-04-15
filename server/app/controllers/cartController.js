const cartService = require("../services/cartService");

exports.addToCart = async (req, res) => {
    try {
        const cartItem = await cartService.createCart(req.body);
        res.status(201).json(cartItem);
    } catch (error) {
        console.error("Error creating cart item:", error);
        res.status(500).send("Error creating cart item");
    }
};

exports.getAllCarts = async (req, res) => {
    try {
      const cart = await cartService.getAllCarts();
      res.status(200).json(cart);
    } catch (error) {
      console.error('Error getting all cart:', error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }
};

exports.getCartItems = async (req, res) => {
    try {
      const cartId = req.params.id;
      const cart = await cartService.getCartItems(cartId);
      if (!cart) {
        return res.status(404).json({
          success: false,
          message: 'cart not found'
        });
      }
      res.status(200).json(cart);
    } catch (error) {
      console.error('Error getting cart by ID:', error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }
};

exports.removeCartItemById = async (req, res) => {
    const itemId = req.params.id;
    try {
        const deletedItem = await cartService.removeCartItemById(itemId);
        if (!deletedItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }
        return res.status(200).json({ message: "Cart item removed successfully", deletedItem });
    } catch (error) {
        console.error("Error removing cart item:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
