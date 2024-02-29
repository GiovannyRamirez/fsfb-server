const { DB_TABLES } = require("./constants");

const QUERIES = {
  USERS: {
    INSERT: ({ name, email, hash }) =>
      `INSERT INTO ${DB_TABLES.USERS} (name, email, hash) VALUES ('${name}', '${email}', '${hash}')`,
    GET: ({ email }) =>
      `SELECT id_user, name, hash FROM ${DB_TABLES.USERS} WHERE email = '${email}' LIMIT 1`,
  },
  PRODUCTS: {
    INSERT: ({ name, description, price, id_user }) =>
      `INSERT INTO ${DB_TABLES.PRODUCTS} (name, description, price, id_user) VALUES ('${name}', '${description}', ${price}, ${id_user})`,
    GET: ({ userId }) =>
      `SELECT * FROM ${DB_TABLES.PRODUCTS} WHERE id_user = ${userId}`,
    UPDATE: ({ id_product, name, description, price }) =>
      `UPDATE ${DB_TABLES.PRODUCTS} SET name = '${name}', description = '${description}', price = ${price} WHERE id_product = ${id_product}`,
    DELETE: ({ id_product }) =>
      `DELETE FROM ${DB_TABLES.PRODUCTS} WHERE id_product = ${id_product}`,
  },
};

module.exports = QUERIES;
