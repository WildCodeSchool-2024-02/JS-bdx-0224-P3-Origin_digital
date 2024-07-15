const Joi = require("joi");

const createUserSchema = Joi.object({
  title: Joi.string().min(1).max(255).required(),
  description: Joi.string().min(1).max(1000).required(),
  upload_date: Joi.date().required(),
  duration: Joi.number().integer().min(1).required(),
  video_url: Joi.string().min(0).max(255),
  img_url: Joi.string().min(0).max(255),
  access: Joi.string().min(0).max(100),
  category_id: Joi.number().integer().min(1).required(),
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
