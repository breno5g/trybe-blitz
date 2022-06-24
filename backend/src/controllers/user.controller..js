const service = require('../services/user.service');

const create = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    await service.create({ username, email, password });
    res.status(201).json({ message: 'user created successfully' });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    console.log();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  login,
};
