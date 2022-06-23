const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use(routes);

app.listen(PORT, () => {
  console.log('Server on');
});
