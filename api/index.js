const express = require('express');
const users = require('./users');
const keywords = require('./keywords');
const todo = require('./todo');

const router = express.Router();


router.use('/users',users);
router.use('/keywords',keywords);
router.use('/todos',todo);

module.exports = router;