const express = require('express');
const recipientController = require('../controllers/recipient');

const router = express.Router();


router.get('/create-recipient', recipientController.createRecipient);

module.exports = router;