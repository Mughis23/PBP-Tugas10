const mysql = require ('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mahasiswa',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting ti MySQL database', err);
    } else{
        console.log('Connected to MySQL Database');
    }
});

module.exports = connection;