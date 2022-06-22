const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 3001 });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('Server on');
});
