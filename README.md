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

First of all you need to create an **_.env_** file and configure enviroment variables:

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

# Dependencies used

- dotenv: For manage environment variables considering that NodeJS v20.x just have an _experimental support for .env files_
- express: Framework to configure a basic web app application based in NodeJS
- jsonwebtoken: Used to generate and verify jwt authentication
- bcrypt: Used to hash user password and verify it on login
- mysql2: Used to get connection to MySQL Database
- cors: Used to prevent cors error with frontend integration
- zod: Used to implement body validator schemas middleware
