const express = require('express');
const cors = require('cors');

const error = require('./middlewares/error.middleware');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// app.use(function (_req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

app.use(routes);

app.use(error);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('Server on');
});
