const db = require('../utils/mysql-connection');

exports.insertRecipient = async (name, phone, city, zone, address) => {

    const DATA = [
        name,
        phone,
        city,
        zone,
        address
    ];
    console.log(DATA);
    const SQL = `INSERT INTO recipients (name, phone, city, zone, address)
                    VALUES(?,?,?,?,?)
    `
    try {

        const result = await db.execute(SQL, DATA);
        return result[0];

    } catch (err) {
        console.log(err);
    }
}