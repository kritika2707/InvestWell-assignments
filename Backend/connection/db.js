/*This file is for database connection......*/

const mysql = require('mysql2');

//database details
var mysqlConnect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kittu277',
    database: 'investwell_assignment'
})

mysqlConnect.connect((err) => {
    if (err)
        console.log(err);
    else
        console.log('Database Connected!!')
})
// checking database is connected or not
// making this file export file
module.exports = mysqlConnect;
