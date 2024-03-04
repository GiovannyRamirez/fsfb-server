# FSFB Server

This project is a server to manage users and products.

## Users

- Registration
- Login

## Products

- Create a new product
- Get all products
- Update a specific product
- Delete a specific product

# How to use

1. First of all you need to create an **_.env_** file and configure enviroment variables:

   - PORT
   - JWT_SECRET
   - JWT_EXPIRATION
   - DB_HOST
   - DB_NAME
   - DB_PORT
   - DB_USER
   - DB_PASS
   - DB_USERS_TABLE
   - DB_PRODUCTS_TABLE

2. After that, you have to install dependendecies with `npm install`.

3. Finally, you have to run server with `npm run start` or `npm run dev` if you want to make changes and see it.

# Dependencies used

- **_dotenv_**: For manage environment variables considering that NodeJS v20.x just have an _experimental support for .env files_
- **_express_**: Framework to configure a basic web app application based in NodeJS
- **_jsonwebtoken_**: Used to generate and verify jwt authentication
- **_bcrypt_**: Used to hash user password and verify it on login
- **_mysql2_**: Used to get connection to MySQL Database
- **_cors_**: Used to prevent cors error with frontend integration
- **_zod_**: Used to implement body validator schemas middleware

# Middlewares used

- **_express.json_**: Parses request into JSON format.
- **_cors_**: Enables **_CORS_**.
- **_bodyValidation_**: Verify if the body matches defined schemas (with **_zod_**) depending on body fields.
- **_jwtValidationMiddleware_**: Used in **_products_** operations to validate if an user is authenticated, and to extract from it the userId to excute the products queries.
- **_errorHandlerMiddleware_**: Used to catch any error.

# Routes

### Users management

- **_POST /users/register_**: Register a new user.
- **_POST /users/login_**: Login an user.

### Products management

- **_GET /products/all_**: Return alll products from a specific user.
- **_POST /products/all_**: Create new product to a specific user.
- **_PUT /products/:id_**: Update a specific product.
- **_DELETE /products/:id_**: Delete a specific product.

# API Doc

Can be seen in a **_FSFBPostmanCollection.json_** file.
Is a Postman file with documentation, to use it, you need to set the environmental variables:

- **_url_**: https://fsfb-server.up.railway.app
- **_appToken_**: Once logged in, copy token field from response and paste it here.
