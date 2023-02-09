const mysql = require('mysql2');

//database connection
var mysql_con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kittu277',
    database: 'investwell_assignment'
})
mysql_con.connect((err)=>{
    if(err)
        console.log(err);
    else
        console.log('Database Connected!!')
})

module.exports = mysql_con;