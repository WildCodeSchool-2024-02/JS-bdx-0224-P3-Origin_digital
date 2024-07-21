const Joi = require("joi");

const createUserSchema = Joi.object({
  title: Joi.string().min(1).max(255).required(),
  description: Joi.string().min(1).max(1000).required(),
  duration: Joi.string().min(1).max(8).required(),
  video_url: Joi.string().min(0).max(255).required(),
  img_url: Joi.string().min(0).max(255),
  access: Joi.bool().required(),
  category_id: Joi.number().integer().min(1).required(),
  tags_id: Joi.array().items(Joi.number().integer()).required(),
  user_id: Joi.number().integer().min(1).required(),
});

const validateVideo = (req, res, next) => {
  const { error } = createUserSchema.validate(req.body, { abortEarly: false });
  if (error == null) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

module.exports = validateVideo;
