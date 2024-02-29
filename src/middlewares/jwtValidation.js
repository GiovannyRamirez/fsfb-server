const { failResponse } = require("../responses");
const { verifyToken } = require("../utils/token");

const jwtValidationMiddleware = (req, res, next) => {
  const token = req.headers["app-token"];

  if (!token) {
    const tokenError = Error("No token in request");
    return failResponse(res, 401, tokenError, "jwtValidationMiddleware");
  }

  try {
    const info = verifyToken(token);
    req.user = info;

    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      const expiredError = Error("Token expired");

      return failResponse(res, 401, expiredError, "jwtValidateExpiration");
    }

    return failResponse(res, 500, err, "jwtValidation");
  }
};

module.exports = {
  jwtValidationMiddleware,
};
