const express = require('express');
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = require('./swagger.json');

const error = require('./middlewares/error.middleware');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());

const DisableTryItOutPlugin = function () {
  return {
    statePlugins: {
      spec: {
        wrapSelectors: {
          allowTryItOutFor: () => () => false,
        },
      },
    },
  };
};

const options = {
  swaggerOptions: {
    plugins: [DisableTryItOutPlugin],
  },
};

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));

app.use(routes);

app.use(error);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('Server on');
});
