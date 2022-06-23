const joi = require('joi');

const schema = joi.object({
  username: joi.string().min(3).required(),
  email: joi.string().min(3).required(),
  password: joi.string().min(3).required(),
});

module.exports = schema;