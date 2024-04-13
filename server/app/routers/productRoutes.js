// productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.post('/add', productController.createProduct);
router.get('/categories', productController.getAllCategories); // New route for fetching all categories
router.get('/category/:category', productController.getProductsByCategory);
router.get('/:id', productController.getProductById);

module.exports = router;
