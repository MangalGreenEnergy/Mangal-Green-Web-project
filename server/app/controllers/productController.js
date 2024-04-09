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
