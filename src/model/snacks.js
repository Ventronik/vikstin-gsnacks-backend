const db = require('../../db')
// const bcrypt = require('bcrypt-as-promised')



function getAll (req, res, next) {
  return db('snacks')
}

module.exports ={
  getAll
}
