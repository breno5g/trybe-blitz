const express = require('express');
const router = express.Router();

const swaggerUi = require('swagger-ui-express');

const swaggerDocs = require('../swagger.json');

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

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));

module.exports = router;
