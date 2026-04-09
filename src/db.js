const mysql = require("mysql2/promise");
require("dotenv").config();

console.log("DATABASE_URL:", process.env.DATABASE_URL);

let pool;

if (process.env.DATABASE_URL) {
  // ✅ Railway (production)
  pool = mysql.createPool({
    uri: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  // ✅ Local (development)
  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
}

module.exports = pool;