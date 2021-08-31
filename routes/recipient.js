const express = require('express');
const recipientController = require('../controllers/recipient');

const router = express.Router();


router.post('/create-recipient', recipientController.createRecipient);

module.exports = router;