const { createPool } = require("mysql2/promise");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "localhost",
  user: "CrisEstudos",
  password: "israel01061985",
  database: "heroku_12f1937794459fe",
  
});
/** Connection pool creation - END */

module.exports = db;