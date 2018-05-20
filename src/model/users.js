const db = require('../../db')
// const bcrypt = require('bcrypt-as-promised')

function getAll () {
  return db('users')
}

function getOne (userId) {
  return db('users').where({ id: userId }).first()
}

function getAllUserComments (userId) {
  return db('reviews').where({ user_id: userId })
}

module.exports ={
  getAll,
  getOne,
  getAllUserComments
}
