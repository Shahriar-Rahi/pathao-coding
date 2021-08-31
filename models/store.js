const db = require('../utils/mysql-connection');

exports.insertStore= async (order_id, product_id, store_name) => {

    const DATA = [
        order_id, product_id, store_name
    ];
    console.log(DATA);
    const SQL = `INSERT INTO stores (order_id, product_id, store_name)
                    VALUES(?,?, ?)
    `
    try {

        const result = await db.execute(SQL, DATA);
        return result[0];

    } catch (err) {
        console.log(err);
    }
}