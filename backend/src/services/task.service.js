const { user, task } = require('../database/models');
const JWT = require('../utils/jwt.class');

const getAll = async (token) => {
  const id = new JWT().validateToken(token).id;
  const tasks = await user.findAll({
    where: { id },
    include: { model: task, as: 'tasks' },
  });
  return tasks;
};

module.exports = {
  getAll,
};
