const { user } = require('../database/models');
const bcrypt = require('../utils/bcrypt');
const MyError = require('../utils/error.class');
const JWT = require('../utils/jwt.class');

const create = async (data) => {
  const userExists = await user.findOne({ where: { email: data.email } });

  if (userExists) throw new MyError(409, 'User already exists');

  const encryptedPassword = await bcrypt.generatePassword(data.password);
  await user.create({
    ...data,
    password: encryptedPassword,
  });
};

const login = async (data) => {
  const userData = await user.findOne({ where: { email: data.email } });
  if (!userData) throw new MyError(400, 'Incorrect email or password');
  const validatePassword = await bcrypt.comparePassword(
    data.password,
    userData.password
  );
  if (!validatePassword) throw new MyError(400, 'Incorrect email or password');
  return {
    username: userData.username,
    email: userData.email,
    token: new JWT().generateToken({
      id: userData.id,
      email: userData.email,
      username: userData.username,
    }),
  };
};

module.exports = {
  create,
  login,
};
