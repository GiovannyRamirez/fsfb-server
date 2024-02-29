const dotenv = require("dotenv");
const express = require("express");

const { errorHandlerMiddleware } = require("./middlewares/errorHandler");
const { jwtValidationMiddleware } = require("./middlewares/jwtValidation");

const { ENDPOINTS } = require("./constants/endpoints");

const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.use(ENDPOINTS.PRODUCTS.BASE, [jwtValidationMiddleware, productsRouter]);
app.use(ENDPOINTS.USERS.BASE, usersRouter);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
