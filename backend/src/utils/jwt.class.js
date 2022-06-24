const jwt = require('jsonwebtoken');
require('dotenv').config();

// const { JWT_SECRET } = process.env;

// const jwtConfig = {
//   expiresIn: '7d',
//   algorithm: 'HS256',
// };

// const generateToken = (user) => {
//   const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
//   return token;
// };

// const validateToken

// module.exports = {
//   generateToken,
// };

class JWT {
  constructor() {
    this.jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    this.jwtSecret = process.env.JWT_SECRET;
  }

  generateToken(user) {
    const { jwtSecret, jwtConfig } = this;
    const token = jwt.sign({ data: user }, jwtSecret, jwtConfig);
    return token;
  }

  validateToken(token) {
    const { jwtSecret } = this;
    const result = jwt.decode(token, jwtSecret);
    return result;
  }
}

module.exports = JWT;
