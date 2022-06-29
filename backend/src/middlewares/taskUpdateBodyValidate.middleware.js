const { update } = require('../schemas/task');
const JWT = require('../utils/jwt.class');

const taskBodyValidate = (req, _res, next) => {
  const { title, description, status, id } = req.body;
  const { authorization } = req.headers;
  const { id: paramId } = req.params;
  const tokenId = new JWT().validateToken(authorization).data.id;
  const { error } = update.validate({ title, description, status, id });
  if (error) {
    next({ status: 400, message: error.message });
  }
  if (tokenId !== Number(paramId)) {
    next({
      status: 401,
      message: 'You are not allowed to update tasks on other users',
    });
  }

  next();
};

module.exports = taskBodyValidate;
