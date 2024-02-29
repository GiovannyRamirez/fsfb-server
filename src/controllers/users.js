const bcrypt = require("bcrypt");

const { generateToken } = require("../utils/token");

const pool = require("../database/connection");
const { USERS } = require("../database/queries");

const { okResponse } = require("../responses");

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userQuery = USERS.GET({ email });
    const user = await pool.query(userQuery);
    const userExists = !!user.length;

    if (userExists)
      return okResponse(
        res,
        {
          error: "User can not be created because email already exists",
        },
        202
      );

    const encPasword = await bcrypt.hash(password, 16);

    const userToCreate = {
      name,
      email,
      hash: encPasword,
    };

    const insertQuery = USERS.INSERT(userToCreate);

    const { insertId: userId } = await pool.query(insertQuery);

    const createdUser = {
      userId,
      name,
      email,
    };

    const token = generateToken(createdUser);

    const response = {
      ...createdUser,
      token,
    };

    return okResponse(res, response, 201);
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userQuery = USERS.GET({ email });
    const user = await pool.query(userQuery);
    const invalidUser = !user.length;

    if (invalidUser)
      return okResponse(res, { error: "User or password incorrect" }, 404);

    const [{ id_user: userId, name, hash }] = user;
    const isValidPassword = await bcrypt.compare(password, hash);

    if (!isValidPassword)
      return okResponse(res, { error: "User or password incorrect" }, 404);

    const userToLogin = {
      userId,
      name,
      email,
    };

    const token = generateToken(userToLogin);

    const response = {
      ...userToLogin,
      token,
    };

    return okResponse(res, response);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  loginUser,
};
