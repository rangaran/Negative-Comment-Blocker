
const express = require('express');
const router = express.Router();

const sh_controller = require('./sh.controller');

module.exports = router;

////////////CRUD OPERATIONS///////////////////

//create - post http request
router.post('/add/comment', sh_controller.comment_create);
