const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cherry',
    database: 'tracker'
});

db.connect();

module.exports = db;