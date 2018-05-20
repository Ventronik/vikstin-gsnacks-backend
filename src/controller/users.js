const model = require('../model/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function getAll(req, res, next) {
  model.getAll()
    .then(function(data) {
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
          message: 'User has been released due to good behavior'
        }
      }
    })
    .catch(next)
}

function getAllUserComments(req, res, next) {
  console.log('kittens')
  model.getAllUserComments(parseInt(req.params.id))
  .then(function(data) {
    if (data) {
      return res.status(200).send({
        data
      })
    } else {
      throw {
        status: 404,
        message: 'Comments sealed by court order'
      }
    }
  })
  .catch(next)
}

module.exports = {
  getAll,
  getOne,
  getAllUserComments
}
