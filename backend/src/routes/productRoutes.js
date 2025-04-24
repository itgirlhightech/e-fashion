const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct } = require('../controllers/productController');

// Definição das rotas
router.get('/', getAllProducts);
router.post('/', createProduct);

module.exports = router;
