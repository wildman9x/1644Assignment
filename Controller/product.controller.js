const ProductService = require("../Services/ProductService");
const { validationResult } = require("express-validator");
const { response } = require("express");

module.exports = class ProductController {
    static async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts();
            // console.log("All products:");
            //get all products to render in index.hbs
            res.render('index', { products: products });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductService.getProductById(id);
            if (product) {
                return res.status(200).json(product);
            }
            res.status(404).json({ error: "Product not found" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getProductsByName(req, res) {
        try {
            const { name } = req.params;
            const products = await ProductService.getProductsByName(name);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createProduct(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const product = await ProductService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const deleted = await ProductService.deleteProduct(id);
            if (deleted) {
                return res.status(200).send("Product deleted");
            }
            throw new Error("Product not found");
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async editProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductService.editProduct(id, req.body);
            res.status(200).json(product);
            
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};