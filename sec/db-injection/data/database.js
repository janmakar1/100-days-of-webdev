const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost",
  database: "security",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

module.exports = pool;
