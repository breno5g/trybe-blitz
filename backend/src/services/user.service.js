const { user } = require('../database/models');
const bcrypt = require('../utils/bcrypt');
const MyError = require('../utils/error.class');

const create = async (data) => {
  const userExists = await user.findOne({ where: { email: data.email } });

  if (userExists) throw new MyError(409, 'User already exists');

  const encryptedPassword = await bcrypt.generatePassword(data.password);
  await user.create({
    ...data,
    password: encryptedPassword,
  });
};

module.exports = {
  create,
};
