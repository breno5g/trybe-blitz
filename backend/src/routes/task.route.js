const express = require('express');
const router = express.Router();

const controller = require('../controllers/task.controller');
const validateToken = require('../middlewares/validateToken.middleware');
const taskBodyValidate = require('../middlewares/taskBodyValidate.middleware');
const taskUpdateBodyValidate = require('../middlewares/taskUpdateBodyValidate.middleware');

router.get('/', validateToken, controller.getAll);
router.post('/', validateToken, taskBodyValidate, controller.create);
router.delete('/:id', validateToken, controller.remove);
router.put('/', validateToken, taskUpdateBodyValidate, controller.update);
// router.post('/register', controller.create);

module.exports = router;
