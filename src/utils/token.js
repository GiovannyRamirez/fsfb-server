const jwt = require("jsonwebtoken");

const generateToken = (body) => {
  const { JWT_SECRET, JWT_EXPIRATION } = process.env;
  const token = jwt.sign(body, JWT_SECRET, { expiresIn: JWT_EXPIRATION });

  return token;
};

const verifyToken = (token) => {
  const { JWT_SECRET } = process.env;
  const verifiedToken = jwt.verify(token, JWT_SECRET);

  return verifiedToken;
};

module.exports = {
  generateToken,
  verifyToken,
};
