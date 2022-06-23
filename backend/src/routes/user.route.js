const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller.');
const validateBody = require('../middlewares/validateRegisterBody.middleware');

router.post('/register', validateBody, controller.create);

module.exports = router;