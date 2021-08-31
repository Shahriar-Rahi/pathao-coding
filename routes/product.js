const express = require('express');
const productController = require('../controllers/product');

const router = express.Router();


router.post('/create-product', productController.createProduct);

module.exports = router;