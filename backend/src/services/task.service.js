const { user, task } = require('../database/models');
const JWT = require('../utils/jwt.class');

const getAll = async (token) => {
  const id = new JWT().validateToken(token).data.id;
  const tasks = await user.findAll({
    where: { id },
    attributes: { exclude: ['password'] },
    include: {
      model: task,
      as: 'task',
      attributes: { exclude: ['userId'] },
    },
  });
  return tasks;
};

module.exports = {
  getAll,
};
