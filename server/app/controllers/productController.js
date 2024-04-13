// productController.js
const productService = require('../services/productService');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error getting all products:', error);
    res.status(500).send('Error getting all products');
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await productService.getProductById(productId);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error getting product by ID:', error);
    res.status(500).send('Error getting product by ID');
  }
};

exports.createProduct = async (req, res) => {
  console.log(req);
  try {
    const productData = req.body;
    const newProduct = await productService.createProduct(productData);
    res.status(201).json({
      message: 'Product created successfully',
      product: newProduct
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).send('Error creating product');
  }
};
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await productService.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error getting all categories:', error);
    res.status(500).send('Error getting all categories');
  }
};
exports.getProductsByCategory = async (req, res) => {
  // console.log(req);
  try {
    const category = req.params.category;
    const products = await productService.getProductsByCategory(category);
    res.status(200).json(products);
  } catch (error) {
    console.error('Error getting products by category:', error);
    res.status(500).send('Error getting products by category');
  }
};
