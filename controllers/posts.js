'use strict'
const Post = require('../models/Post')
const success = require('../libs/success')
const error = require('../libs/error')

function create(req, res) {
  const body = req.body
  const post = new Post(body)
  post.save()
    .then((data) => { success(res, data) })
    .catch((err) => { error(res, err) })
}

module.exports = {
  create,
}
