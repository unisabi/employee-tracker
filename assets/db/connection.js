const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cherry',
    database: 'trackerTable'
});

db.connect();

module.exports = db;