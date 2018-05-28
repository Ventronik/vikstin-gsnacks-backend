const express = require('express');
const index = require('../../db');
const reviewController = require('../controller/reviews')

const router = express.Router();

router.get('/reviews', reviewController.getAll)
router.get('/reviews/:id/', reviewController.getOne)
router.post('/reviews/', reviewController.createReview)
router.patch('/reviews/:id/', reviewController.updateReview)
router.delete('/reviews/:id/', reviewController.deleteReview)

module.exports = router;
