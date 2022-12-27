const express = require('express');
const router = express.Router();
const ProductController = require('../Controller/product.controller');

router.get('/', ProductController.getAllProducts);
router.get('/product/:id', ProductController.getProductById);
router.get('/search/:name', ProductController.getProductsByName);
router.post('/new', ProductController.createProduct);
router.delete('/product/:id', ProductController.deleteProduct);

module.exports = router;