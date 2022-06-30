const joi = require('joi');

const create = joi.object({
  title: joi.string().min(3).required(),
  description: joi.string().min(3).required(),
  status: joi.string().min(3).valid('pending', 'completed', 'done').required(),
});

const update = joi.object({
  title: joi.string().min(3).required(),
  description: joi.string().min(3).required(),
  status: joi.string().min(3).valid('pending', 'completed', 'done').required(),
  id: joi.number().required(),
});

module.exports = { create, update };
