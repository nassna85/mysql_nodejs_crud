const mysql = require('mysql');

const connection = mysql.createConnection({
    //Please verify your configuration...
    host: 'localhost',
    user: 'root',
    password:'root',
    database:'mysql_db_1'
});

module.exports = {
    connection
};

