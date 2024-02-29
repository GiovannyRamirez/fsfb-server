const router = require("express");

const { ENDPOINTS } = require("../constants/endpoints");
const { createUser, loginUser } = require("../controllers/users");

const usersRouter = router.Router();

usersRouter.route(ENDPOINTS.USERS.REGISTER).post(createUser);
usersRouter.route(ENDPOINTS.USERS.LOGIN).post(loginUser);

module.exports = usersRouter;
