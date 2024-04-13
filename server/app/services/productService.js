// productsServices.js
const Product = require('../models/Product');

exports.getAllProducts = async () => {
  return await Product.find();
};

exports.getProductById = async (productId) => {
  return await Product.findById(productId);
};

exports.createProduct = async (productData) => {
  return await Product.create(productData);
};
exports.getAllCategories = async () => {
  return await Product.distinct('Category');
};
exports.getProductsByCategory = async (category) => {
  return await Product.find({ Category: category });
};
