const express = require('express');
const router = express.Router();

const controller = require('../controllers/task.controller');
const validateToken = require('../middlewares/validateToken.middleware');
const taskBodyValidate = require('../middlewares/taskBodyValidate.middleware');

router.get('/', validateToken, controller.getAll);
router.post('/', validateToken, taskBodyValidate, controller.create);
router.delete('/:id', validateToken, controller.remove);
// router.post('/register', controller.create);

module.exports = router;
