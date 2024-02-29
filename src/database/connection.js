const mysql = require("mysql2");
const { promisify } = require("util");

const { DB_PARAMS } = require("./constants");

const pool = mysql.createPool(DB_PARAMS);

pool.getConnection((err, connection) => {
  if (err) console.error(`Error in DB: ${err}`);
  if (connection) {
    connection.release();
    console.log("DB Connected");
    return;
  }
});

pool.query = promisify(pool.query);

module.exports = pool;
