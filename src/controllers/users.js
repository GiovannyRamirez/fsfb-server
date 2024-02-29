const bcrypt = require("bcrypt");

const { okResponse } = require("../responses");

const { generateToken } = require("../utils/token");

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const encPasword = await bcrypt.hash(password, 16);

    const userToCreate = {
      name,
      email,
      hash: encPasword,
    };

    // TODO Save user in DB, get id and pass it to token generation
    const token = generateToken({ name, email });

    const response = {
      name,
      email,
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

    // TODO Read user from DB to get name, password (for camparation) and id,to get a token
    // if (!user)
    //   return okResponse(res, { error: "User or password incorrect" }, 404);

    // const isValidPassword = await bcrypt.compare(password, "asdasd");

    // if (isValidPassword)
    //   return okResponse(res, { error: "User or password incorrect" }, 404);

    const token = generateToken({ email });

    const response = {
      // name,
      email,
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
