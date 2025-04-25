const Product = require('../models/productModel');

async function createProduct(productData) {
   const newProduct = await Product.create(data);
   return newProduct;
}

async function getAllProducts() {
    return await Product.findAll();
}

module.exports = {
    getAllProducts,
    createProduct
};