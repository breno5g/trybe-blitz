const { user } = require('../database/models');

const create = async (data) => {
  await user.create(data);
};

module.exports = {
  create
};