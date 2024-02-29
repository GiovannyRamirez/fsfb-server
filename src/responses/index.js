module.exports = {
  okResponse: (res, data, code = 200) =>
    res.status(code).json({
      message: "OK",
      error: false,
      ...data,
    }),
  failResponse: (res, code = 500, err, func = "generalError") => {
    console.error(`${func}: `, err);

    return res.status(code).json({
      message: `Something went wrong: ${func}`,
      error: err.message,
    });
  },
};
