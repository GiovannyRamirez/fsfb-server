const pool = require("../database/connection");
const { PRODUCTS } = require("../database/queries");

const { okResponse } = require("../responses");

const createProduct = async (req, res, next) => {
  try {
    const {
      body: { name, description, price },
      user: { userId },
    } = req;

    const productToCreate = {
      name,
      description,
      price,
      id_user: userId,
    };

    const insertQuery = PRODUCTS.INSERT(productToCreate);
    const { insertId: id_product } = await pool.query(insertQuery);

    const response = {
      message: "Product created",
      productInfo: {
        ...productToCreate,
        id_product,
      },
    };

    return okResponse(res, response, 201);
  } catch (err) {
    next(err);
  }
};

const getProducts = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const getQuery = PRODUCTS.GET({ userId });
    const products = await pool.query(getQuery);

    if (!products.length)
      return okResponse(
        res,
        { message: `No products for ${userId} user` },
        204
      );

    return okResponse(res, { products });
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const {
      params: { productId: id_product },
      body: { name, description, price },
      user: { userId: id_user },
    } = req;

    const newProductInfo = {
      id_product,
      name,
      description,
      price,
    };

    const updateQuery = PRODUCTS.UPDATE(newProductInfo);
    await pool.query(updateQuery);

    const response = {
      message: "Product was updated",
      productInfo: {
        ...newProductInfo,
        id_user,
      },
    };

    return okResponse(res, response);
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { productId: id_product } = req.params;

    const deleteQuery = PRODUCTS.DELETE({ id_product });
    await pool.query(deleteQuery);

    return okResponse(res, { message: "Product was deleted" });
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
