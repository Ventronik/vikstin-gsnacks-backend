const express = require('express')
const router = express.Router()
const authController = require('../controller/auth')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
router.get('/', authController.isAuthenticated)
router.get('/:id',
  authController.isAuthenticated,
  authController.isSelf,
<<<<<<< HEAD
  function function(req, res, next){ res.send({ id: req.claim.id, message: "For your eyes only"}) })
)

=======
  function(req, res, next){
    res.send({ id: req.claim.id, message: "For your eyes only"})
  }
)
>>>>>>> 21f44d9f48f07f55b62b316b3316c2b4c5658e36

router.get('/token', authController.isAuthenticated, authController.getAuthStatus)
router.post('/token', authController.login)



module.exports = router
