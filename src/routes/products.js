const router = require("express");

const { ENDPOINTS } = require("../constants/endpoints");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

const productsRouter = router.Router();

productsRouter.route(ENDPOINTS.PRODUCTS.ALL).get(getProducts);
productsRouter.route(ENDPOINTS.PRODUCTS.ALL).post(createProduct);
productsRouter.route(ENDPOINTS.PRODUCTS.SPECIFIC).put(updateProduct);
productsRouter.route(ENDPOINTS.PRODUCTS.SPECIFIC).delete(deleteProduct);

module.exports = productsRouter;
