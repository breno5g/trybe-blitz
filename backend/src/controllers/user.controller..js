const service = require('../services/user.service');

const create = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    await service.create({ username, email, password });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await service.login({ email, password });

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  login,
};
