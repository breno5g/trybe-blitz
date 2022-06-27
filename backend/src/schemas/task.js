const joi = require('joi');

const schema = joi.object({
  title: joi.string().min(3).required(),
  description: joi.string().min(3).required(),
  status: joi.string().min(3).valid('pending', 'completed', 'done').required(),
  userId: joi.number().required(),
});

module.exports = schema;
