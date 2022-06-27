const joi = require('joi');

const schema = joi.object({
  title: joi.string().min(3).required(),
  description: joi.string().min(3).required(),
  status: joi.string().min(3).required(),
  userId: joi.string().min(3).required(),
});

module.exports = schema;
