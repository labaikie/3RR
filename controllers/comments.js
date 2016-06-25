'use strict'
const Comment = require('../models/Comment')
const success = require('../libs/success')
const error = require('../libs/error')

function create(req, res){
  const body = req.body
  const comment = new Comment(body)
  comment.save()
    .then((data) => { success(res, data) })
    .catch((err) => { error(res, err) })
}

function delete(req, res){
  Comment.findByIdAndRemove(req.params.id)
  const query = Comment.findByIdAndRemove(req.params.id).exec()

  query
  .then((data) => { success(res, data) })
  .catch((err) => { error(res, err) })
}


module.exports = {
  create,
  delete
}
