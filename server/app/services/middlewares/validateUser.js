const Joi = require("joi");

const createUserSchema = Joi.object({
  firstname: Joi.string().min(1).max(100).required(),
  lastname: Joi.string().min(1).max(100).required(),
  email: Joi.string().email().min(5).max(255).required(),
  roleId: Joi.number().integer().min(1).max(3).required(),
  password: Joi.string()
    .pattern(
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/
    )
    .required(),
  siret: Joi.string().min(0).max(100),
});

const validateUser = (req, res, next) => {
  const { error } = createUserSchema.validate(req.body, { abortEarly: false });
  if (error == null) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

module.exports = validateUser;
