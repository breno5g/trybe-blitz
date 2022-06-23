const { user } = require('../database/models');
const bcrypt = require('../utils/bcrypt');

const create = async (data) => {
  const encryptedPassword = await bcrypt.generatePassword(data.password);
  await user.create({
    ...data,
    password: encryptedPassword
  });
};

module.exports = {
  create
};