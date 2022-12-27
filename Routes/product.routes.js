const express = require('express');
const router = express.Router();
const ProductController = require('../Controller/product.controller');

router.get('/', ProductController.getAllProducts);
router.get('/product/:id', ProductController.getProductById);
router.get('/search', ProductController.getProductsByName);
router.get('/new', (req, res) => {
    res.render('newProduct', { PageName: 'Add a new Product' });
});

router.post('/new', ProductController.createProduct);
router.delete('/product/:id', ProductController.deleteProduct);

module.exports = router;