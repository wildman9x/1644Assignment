const express = require('express');
const router = express.Router();
const ProductController = require('../Controller/product.controller');
const ProductService = require('../Services/ProductService');
const ProductModel = require('../Models/Product');

router.get('/', ProductController.getAllProducts);
router.get('/product/:id', ProductController.getProductById);
router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const product = await ProductService.getProductById(id);
    console.log(product);
    res.render('newProduct', {product: product,
        PageName: 'Edit Product' });
    });
router.get('/search', ProductController.getProductsByName);
router.get('/new', (req, res) => {
    res.render('newProduct', { PageName: 'Add a new Product' });
});

router.post('/new', ProductController.createProduct);
router.delete('/product/:id', ProductController.deleteProduct);

module.exports = router;