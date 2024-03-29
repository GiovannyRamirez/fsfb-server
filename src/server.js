require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { bodyValidation } = require("./middlewares/bodyValidator");
const { errorHandlerMiddleware } = require("./middlewares/errorHandler");
const { jwtValidationMiddleware } = require("./middlewares/jwtValidation");

const { ENDPOINTS } = require("./constants/endpoints");

const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");

const { PORT = 8000 } = process.env;
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyValidation);

app.use(ENDPOINTS.PRODUCTS.BASE, [jwtValidationMiddleware, productsRouter]);
app.use(ENDPOINTS.USERS.BASE, usersRouter);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
