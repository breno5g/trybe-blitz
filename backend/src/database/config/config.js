require('dotenv').config();

const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE, HOST } = process.env;

module.exports = {
  development: {
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: HOST,
    dialect: 'mysql',
  },
  test: {
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: HOST,
    dialect: 'mysql',
  },
  production: {
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: HOST,
    dialect: 'mysql',
  },
};
