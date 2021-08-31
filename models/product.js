const db = require('../utils/mysql-connection');

exports.insertProduct = async (store_id, order_id, product_type) => {

    const DATA = [
        store_id, order_id, product_type
    ];
    console.log(DATA);
    const SQL = `INSERT INTO products (store_id, order_id, product_type)
                    VALUES(?,?, ?)
    `
    try {

        const result = await db.execute(SQL, DATA);
        return result[0];

    } catch (err) {
        console.log(err);
    }
}