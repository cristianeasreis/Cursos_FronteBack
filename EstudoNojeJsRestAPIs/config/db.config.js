const { createPool } = require("mysql2");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "localhost",
  user: "CrisEstudos",
  password: "israel01061985",
  database: "heroku_12f1937794459fe",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
  
});

/** Connection pool creation - END */

module.exports = db;