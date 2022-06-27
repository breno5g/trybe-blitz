const express = require('express');
const router = express.Router();

const controller = require('../controllers/task.controller');

router.get('/', controller.getAll);
// router.post('/register', controller.create);

module.exports = router;
