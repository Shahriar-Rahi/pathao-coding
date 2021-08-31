const storeQuery = require('../models/store');

exports.createStore = (req, res, next) => {
    let responseBody = {
        success: false,
        message: '',
        data: []
    }
    const keysMissing = !req.body.orderId || !req.body.productId || !req.body.storeName;

    const orderId = req.body.orderId;
    const storeName = req.body.storeName;
    const productId = req.body.productId;

    console.log(orderId, productId, storeName);

    if (keysMissing) {
        responseBody.message = 'Invalid request body'
        res.status(400).json(responseBody);
    }
    try {

        const result = storeQuery.insertStore(orderId, productId, storeName);
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