const JWT = require('../utils/jwt.class');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const isValid = new JWT().validateToken(authorization);
  if (!isValid)
    next({
      status: 401,
      message: 'Unauthorized, authentication token is required',
    });
  next();
};

module.exports = validateToken;
