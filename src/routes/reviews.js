const express = require('express');
const index = require('../../db');
const reviewController = require('../controller/reviews')
const authController = require('../controller/auth')

const router = express.Router();

router.get('/reviews', reviewController.getAll)
router.get('/reviews/:id/', reviewController.getOne)
router.post('/reviews/', reviewController.createReview) //removed auth controll
router.patch('/reviews/:id/', reviewController.updateReview)//removed auth controll
router.delete('/reviews/:id/', reviewController.deleteReview)//removed auth controll

module.exports = router;
