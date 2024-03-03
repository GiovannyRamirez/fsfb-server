const { RegisterSchema, LoginSchema, ProductSchema } = require("./schemas");

const { failResponse, okResponse } = require("../responses");

const bodyValidation = (req, res, next) => {
  const { body } = req;

  let validation = {
    success: true,
  };

  try {
    if (!body) next();

    if (body.name && body.email && body.password) {
      validation = RegisterSchema.safeParse(body);
    } else if (body.email && body.password) {
      validation = LoginSchema.safeParse(body);
    } else if (body.name && body.description && body.price) {
      validation = ProductSchema.safeParse(body);
    }

    if (!validation.success) {
      const formattedErrors = validation.error.format();

      const errorKeys = Object.keys(formattedErrors);

      const errors = errorKeys.map((err) => {
        if (err === "_errors") return null;
        return {
          [err]: formattedErrors[err],
        };
      });

      const error = errors.filter((err) => err !== null);

      return okResponse(res, { error }, 500);
    }

    next();
  } catch (err) {
    return failResponse(res, 500, err, "bodyValidation");
  }
};

module.exports = {
  bodyValidation,
};
