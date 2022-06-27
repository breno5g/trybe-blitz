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

module.exports = { getAll };
