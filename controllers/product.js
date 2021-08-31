const productQuery = require('../models/product');

exports.createProduct = (req, res, next) => {
    let responseBody = {
        success: false,
        message: '',
        data: []
    }

    const keysMissing = !req.body.storeId || !req.body.orderId || !req.body.productType

    const storeId = req.body.storeId;
    const productType = req.body.productType;
    const orderId = req.body.orderId;
    if (keysMissing) {
        responseBody.message = 'Invalid request body'
        res.status(400).json(responseBody);
    }
    try {

        const result = productQuery.insertProduct(storeId, orderId, productType);
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