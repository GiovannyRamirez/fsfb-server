require("dotenv").config();

const {
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_USERS_TABLE,
  DB_PRODUCTS_TABLE,
} = process.env;

const DB_PARAMS = {
  host: DB_HOST,
  database: DB_NAME,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
};

const DB_TABLES = {
  USERS: DB_USERS_TABLE,
  PRODUCTS: DB_PRODUCTS_TABLE,
};

module.exports = {
  DB_PARAMS,
  DB_TABLES,
};
