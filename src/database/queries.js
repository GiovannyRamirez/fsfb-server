const { DB_TABLES } = require("./constants");

const QUERIES = {
  USERS: {
    INSERT: ({ name, email, hash }) =>
      `INSERT INTO ${DB_TABLES.USERS} (name, email, hash) VALUES ('${name}', '${email}', '${hash}')`,
    GET: ({ email }) =>
      `SELECT id_user, name, hash FROM ${DB_TABLES.USERS} WHERE email = '${email}' LIMIT 1`,
  },
};

module.exports = QUERIES;
