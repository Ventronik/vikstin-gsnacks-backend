const db = require('../../db')
// const bcrypt = require('bcrypt-as-promised')

function getAll () {
  return db('snacks')
}

function getOne (snackId) {
  return db('snacks').where({ id: snackId }).first()
}

module.exports ={
  getAll,
  getOne
}
