const Product = require('../models/product');

exports.getAllProducts = async () => {
  return await Product.find();
};

exports.getProductById = async (productId) => {
  return await Product.findById(productId);
};

exports.createProduct = async (productData) => {
  return await Product.create(productData);
};
