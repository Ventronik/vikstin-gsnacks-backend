const express = require('express');
const index = require('../../db');
const reviewController = require('../controller/reviews')
const authController = require('../controller/auth')

const router = express.Router();

router.get('/reviews', reviewController.getAll)
router.get('/reviews/:id/', reviewController.getOne)
router.post('/reviews/', authController.isAuthenticated, reviewController.createReview)
router.patch('/reviews/:id/', authController.isAuthenticated, reviewController.updateReview)
router.delete('/reviews/:id/', authController.isAuthenticated, reviewController.deleteReview)

module.exports = router;
