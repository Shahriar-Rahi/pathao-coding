const recipientQuery = require('../models/recipient');

exports.createRecipient = (req, res, next) => {
    let responseBody = {
        success: false,
        message: '',
        data: []
    }

    const keysMissing = !req.body.name || !req.body.phone || !req.body.city || !req.body.zone || !req.body.address

    const name = req.body.name;
    const phone = req.body.phone;
    const city = req.body.city;
    const zone = req.body.zone;
    const address = req.body.address;

    if (keysMissing) {
        responseBody.message = 'Invalid request body'
        res.status(400).json(responseBody);
    }
    try {

        const result = recipientQuery.insertRecipient(name, phone, city, zone, address);
        responseBody.success = true
        responseBody.message = 'Recipient Created Successfully';
        responseBody.data = result;
        res.status(200).json(responseBody);
    }
    catch (err) {
        responseBody.message = `couldn't create recipient: ${err}`;
        res.status(500).json(responseBody);
    }
}