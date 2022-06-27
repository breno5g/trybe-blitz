const service = require('../services/task.service');

const getAll = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const tasks = await service.getAll(authorization);
    return res.status(200).json({ data: tasks });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { title, description, status, userId } = req.body;
    await service.create({ title, description, status, userId });
    return res.status(201).json({ message: 'task created successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, create };
