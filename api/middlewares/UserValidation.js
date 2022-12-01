const Joi = require("joi");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const signupSchema = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  dni: Joi.number().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "The password should be minimum 8 characters long , and include at least one uppercase,one lowercase and a number",
    }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "The password should be minimum 8 characters long , and include at least one uppercase,one lowercase and a number",
    }),
});

exports.validateSignup = validator(signupSchema);
exports.validateLogin = validator(loginSchema);
