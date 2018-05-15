const express = require('express');
const index = require('../../db');
const snackController = require('../controller/snacks')

const router = express.Router();

router.get('/snacks', snackController.getAll)


router.get('/snacks/:id', snackController.getOne)


module.exports = router;
