const mysql = require("mysql2");
require('dotenv').config();
const{HOST, DB_USER, DB_PORT, DATABASE, PASSWORD} =process.env
const database = mysql.createConnection({
  host: HOST,
  user: DB_USER,
  port: DB_PORT,
  database: DATABASE,
  password: PASSWORD,
});

module.exports = database;

// const { Sequelize } = require("sequelize");

// const database = new Sequelize("nem104_b37", "root", "12345678", {
//   host: "localhost",
//   dialect: "mysql",
// });

// module.exports = database;
