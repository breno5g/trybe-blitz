const { user, task } = require('../database/models');
const JWT = require('../utils/jwt.class');
const MyError = require('../utils/error.class');

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

const create = async (data) => {
  await task.create({ ...data, createdAt: new Date() });
};

const remove = async (id) => {
  await task.destroy({ where: { id } });
};

const update = async ({ title, description, status, id }, token) => {
  const tokenId = new JWT().validateToken(token).data.id;
  const taskToUpdate = await task.findOne({ where: { id } });
  if (tokenId !== taskToUpdate.userId) {
    throw new MyError(
      401,
      'You are not allowed to update tasks on other users'
    );
  }
  await task.update(
    { title, description, status },
    {
      where: { id },
    }
  );
};

module.exports = {
  getAll,
  create,
  remove,
  update,
};
