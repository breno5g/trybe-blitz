const { login } = require('../schemas/user');

const validateRegisterBody = async (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = login.validate({ email, password });

  if (error) {
    next({ status: 400, message: error.message });
  }

  next();
};

module.exports = validateRegisterBody;
