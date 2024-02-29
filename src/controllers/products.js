const { okResponse } = require("../responses");

const createProduct = async (req, res, next) => {
  try {
    const response = {
      data: "Creating product",
    };

    return okResponse(res, response, 201);
  } catch (err) {
    next(err);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const response = {
      data: "Getting products",
    };

    return okResponse(res, response);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const response = {
      data: "Updating product",
    };

    return okResponse(res, response);
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const response = {
      data: "Deleting product",
    };

    return okResponse(res, response);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
