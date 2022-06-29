const joi = require('joi');

const register = joi.object({
  username: joi.string().min(3).required(),
  email: joi.string().min(3).required(),
  password: joi.string().min(3).required(),
});

const login = joi.object({
  email: joi.string().min(3).required(),
  password: joi.string().min(3).required(),
});

module.exports = { register, login };
