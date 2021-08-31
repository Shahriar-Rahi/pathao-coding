const express = require('express');
const storeController = require('../controllers/store');

const router = express.Router();


router.post('/create-store', storeController.createStore);

module.exports = router;