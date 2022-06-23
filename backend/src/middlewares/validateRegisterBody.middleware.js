const schema = require('../schemas/user');

const validateRegisterBody = async (req, _res, next) => {
  const {username, email, password} = req.body;
  const {error} = schema.validate({username, email, password});

  if (error) {
    next({status: 400, message: error.message});
  }

  next();
};

module.exports = validateRegisterBody;