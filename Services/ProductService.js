const Product = require("../Models/Product");
const mongoose = require("mongoose");

module.exports = class ProductService {
    static async getAllProducts() {
        try {
            return await Product.find();
        } catch (error) {
            console.log(error);
        }
    }

    static async getProductById(id) {
        try {
            return await Product.findById(id);
        } catch (error) {
            console.log(error);
        }
    }

    static async getProductsByName(nameToSearch) {
        try {
            // find all products that contain the name
            return await Product.find({ name: { $regex: nameToSearch, $options: "i" } }).exec();
        } catch (error) {
            console.log(error);
        }
    }

    static async createProduct(product) {
        try {
            return await Product.create(product);
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteProduct(id) {
        try {
            return await Product.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
        }
    }

    static async editProduct(id, product) {
        try {
            return await Product.findByIdAndUpdate(id, product, { new: true });
        } catch (error) {
            console.log(error);
        }
    }
};
