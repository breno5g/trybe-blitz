const express = require('express');

const error = require('./middlewares/error.middleware');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(routes);

app.use(error);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('Server on');
});
