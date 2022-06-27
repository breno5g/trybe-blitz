const express = require('express');
const router = express.Router();

const controller = require('../controllers/task.controller');
const validateToken = require('../middlewares/validateToken.middleware');

router.get('/', validateToken, controller.getAll);
// router.post('/register', controller.create);

module.exports = router;
