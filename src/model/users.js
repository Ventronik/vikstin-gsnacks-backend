const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')

function getAll () {
  return db('users')
}

function getOne (userId) {
  return db('users').where({ id: userId }).first()
}

function getAllUserComments (userId) {
  return db('reviews').where({ user_id: userId })
}

function getOneByUserName(first_name, last_name){
  return (
    db('users')
    .where({ first_name },{ last_name })
    .first()
  )
}

function create(first_name, last_name, email, password){

  //THIS NEEDS TO BE IMPLEMENTED,
  //MAKE SURE THE FN ABOVE IS NOT USING USERNAME.
  //FINISH MOVING DATA THROUGH DATABASE

  return getOneByUserName(first_name,last_name)
  .then(function(data){
    if(data) throw { status: 400, message:'User already exists'}
    return bcrypt.hash(password, 10)
  })
  .then(function(hashedPassword){
    return (
      db('users')
      .insert({ first_name, last_name, email, hashed_password: hashedPassword })
      .returning('*')
    )
  })
  .then(function([ data ]){
    delete data.password
    return data
  })
}

module.exports ={
  getAll,
  getOne,
  getAllUserComments,
  create
}
