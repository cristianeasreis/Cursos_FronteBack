const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "127.0.0.1",
  user: "CrisEstudos",
  password: "israel01061985",
  database: "heroku_12f1937794459fe",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;