const db = require('../../db')
// const bcrypt = require('bcrypt-as-promised')

function getAll () {
  return db('reviews')
}

function getOne (reviewId) {
  return db('reviews').where({ id: reviewId }).first()
}

function createReview(content){
  const title = content.title
  const snack_id = content.snack
  const rating = content.rating
  const text  = content.text
  const user_id = content.user
  return(
    db('reviews')
      .insert({title, snack_id, rating, text, user_id})
    .returning('*')
  )
}

function updateReview(id, content){
  const title = content.title
  const snack_id = content.snack
  const rating = content.rating
  const text  = content.text
  const user_id = content.user

  return(
    db('reviews')
    .update({ title, snack_id, rating, text, user_id})
    .where({ id })
  )
}

function deleteReview(id){
  console.log(id)
  return(
    db('reviews')
    .del()
    .where({ id })
    .returning('*')
    .then(function([data]){
      return data
    })
  )
}

module.exports ={
  getAll,
  getOne,
  createReview,
  updateReview,
  deleteReview
}
