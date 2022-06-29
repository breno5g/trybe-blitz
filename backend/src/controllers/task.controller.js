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

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.remove(id);
    return res.status(200).json({ message: 'Task have been deleted' });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { title, description, status, id } = req.body;
    await service.update({ title, description, status, id });
    return res.status(204).json({ message: 'resource updated successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, create, remove, update };
