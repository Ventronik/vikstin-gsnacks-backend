const express = require('express');
const index = require('../../db');
const userController = require('../controller/users')
// const commentController = require('../controller/comments')

const router = express.Router();

router.get('/users', userController.getAll)
router.get('/users/:id/comments', userController.getAllUserComments)

router.get('/users/:id', userController.getOne)




module.exports = router;
