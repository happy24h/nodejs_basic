// const mysql = require('mysql2');
import mysql from 'mysql2/promise';

// create the connection to database
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejs_basic'
});



export default connection;

