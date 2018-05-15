const express = require('express');
const knex = require('../../db/knex');
const snackController = require('../controller/snacks')

const router = express.Router();

router.get('/snacks', snackController.getAll)

// 
// (req, res, next) => {
//   knex('snacks')
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => next(err));
// })

router.get('/snacks/:id', snackController.getOne)


module.exports = router;
