const express = require('express');
const router = express.Router();

const user = require('./user.route');
const task = require('./task.route');
const docs = require('./docs.route');

router.use('/user', user);
router.use('/task', task);
router.use('/docs', docs);

module.exports = router;
