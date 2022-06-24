const express = require('express');
const error = require('./middlewares/error.middleware');
const routes = require('./routes');
const { user, task } = require('./database/models');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use(routes);

app.get('/teste', async (req, res) => {
  const teste = await user.findAll({
    attributes: { exclude: ['password'] },
    include: { model: task, as: 'task' },
  });

  return res.status(200).json(teste);
});

app.use(error);

app.listen(PORT, () => {
  console.log('Server on');
});
