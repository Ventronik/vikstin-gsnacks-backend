'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile')[environment];
const db = require('knex')(knexConfig);

module.exports = db;
