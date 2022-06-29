const { create } = require('../schemas/task');
const JWT = require('../utils/jwt.class');

const taskBodyValidate = (req, res, next) => {
  const { title, description, status, userId } = req.body;
  const { authorization } = req.headers;
  const id = new JWT().validateToken(authorization).data.id;

  const { error } = create.validate({ title, description, status, userId });
  if (error) {
    next({ status: 400, message: error.message });
  }
  if (id !== userId) {
    next({
      status: 401,
      message: 'You are not allowed to create tasks on other users',
    });
  }

  next();
};

module.exports = taskBodyValidate;
