const model = require('../model/snacks')

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
          message: 'Snack removed do to riots'
        }
      }
    })
    .catch(next)
}

function getAllSnackComments(req, res, next) {
  console.log('kittens')
  model.getAllSnackComments(parseInt(req.params.id))
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
  getAllSnackComments
}
