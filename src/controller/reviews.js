const model = require('../model/reviews')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function getAll(req, res, next) {
  model.getAll()
    .then(function(data) {
      console.log(data)
      res.status(200).send({
        data
      })
    })
    .catch(next)
}

function getOne(req, res, next) {
  model.getOne(parseInt(req.params.id))
    .then(function(data) {
      if (data) {
        return res.status(200).send({
          data
        })
      } else {
        throw {
          status: 404,
          message: 'This reviews has been removed due to censorship'
        }
      }
    })
    .catch(next)
}

function createReview(req, res, next){
  model.createReview(req.body)
    .then(function(data) {
      if (data) {
        return res.status(201).send({
          data
        })
      } else {
        throw {
          status: 404,
          message: 'This reviews has been removed due to censorship'
        }
      }
    })
    .catch(next)
}

function updateReview(req, res, next){
  model.updateReview(parseInt(req.params.id), req.body)
    .then(function(data) {
      if (data) {
        return res.status(202).send({
          data
        })
      } else {
        throw {
          status: 404,
          message: 'This reviews has been removed due to censorship'
        }
      }
    })
    .catch(next)
}

function deleteReview(req, res, next){
  model.deleteReview(parseInt(req.params.id))
    .then(function(data) {
      if (data) {
        return res.status(202).send({
          data
        })
      } else {
        throw {
          status: 404,
          message: 'This reviews has been removed due to censorship'
        }
      }
    })
    .catch(next)
}

module.exports = {
  getAll,
  getOne,
  createReview,
  updateReview,
  deleteReview
}
