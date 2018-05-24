const express = require('express')
const router = express.Router()
const authController = require('../controller/auth')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
router.get('/', authController.isAuthenticated)


router.get('/token', authController.isAuthenticated, authController.getAuthStatus)
router.post('/token', authController.login)



module.exports = router
