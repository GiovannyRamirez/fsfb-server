const { failResponse } = require("../responses");

const errorHandlerMiddleware = (err, req, res, next) =>
  failResponse(res, 500, err, "errorHandlerMiddleware");

module.exports = {
  errorHandlerMiddleware,
};
