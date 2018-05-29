const express = require('express');
const index = require('../../db');
const userController = require('../controller/users')
const authController = require('../controller/auth')
// const commentController = require('../controller/comments')

const router = express.Router();

router.get('/users', userController.getAll)
router.get('/users/:id/comments', userController.getAllUserComments)

router.post('/users', authController.isAuthenticated, userController.create)
router.get('/users/:id', authController.isAuthenticated, userController.getOne)




module.exports = router;
