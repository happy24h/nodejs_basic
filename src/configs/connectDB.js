// const mysql = require('mysql2');
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejs_basic'
});

// // simple query
// connection.query(   
//   'SELECT * FROM `users`',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     let rows = results.map((row) => {return row});
//     console.log(rows); // fields contains extra meta data about results, if available
//   }
// );

export default connection;

