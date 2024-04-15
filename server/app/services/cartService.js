const Cart = require("../models/cartModel");

exports.createCart = async (cartData) => {
    try {
        const newCart = new Cart(cartData);
        return await newCart.save();
    } catch (error) {
        throw error;
    }
};

exports.getAllCarts = async () => {
    return await Cart.find();
};

exports.getCartItems = async (userID) => {
    try {
        return await Cart.find({ userID });
    } catch (error) {
        throw error;
    }
};

exports.removeCartItemById = async (itemId) => {
    try {
        return await Cart.findByIdAndDelete(itemId);
    } catch (error) {
        throw error;
    }
};
