const express = require('express');
//const db = require('./utils/mysql-connection');
const recipientRouter = require('./routes/recipient');
const storeRouter = require('./routes/store');
const produtRouter = require('./routes/product');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// async function testDB(){
//     const result = await db.query('select * from orders');
//     console.log(result);
// }
// testDB();
app.use(recipientRouter);
app.use(storeRouter);
app.use(produtRouter);
app.listen(9000, ()=>{
    console.log(`listening at 9000`);
})