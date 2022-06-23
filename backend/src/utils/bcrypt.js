const bcrypt = require('bcrypt');

const saltRounds = 10;

const generatePassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const comparePassword = async (password, encrypted) => {
  const isPassword = await bcrypt.compare(password, encrypted );
  return isPassword;
};

module.exports = {
  generatePassword,
  comparePassword
};