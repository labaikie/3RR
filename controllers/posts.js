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

function update(req, res) {
  const updates = req.body.updates
  const postId = req.body.postId
  const query = Post.findByIdAndUpdate(postId, updates, { new: true }).exec()
  query
    .then((post) => { success(res, data)})
    .catch((err) => { error(res, err)})
}

function get(req, res) {
  const postId = req.query.postId
  const query = Post.findById(req.query.postId).exec()
  query
    .then((post) => { success(res, data)})
    .catch((err) => { error(res, err)})
}

function destroy(req, res) {
  const postId = req.query.postId
  const query = Post.findByIdAndRemove(postId).exec()
  query
    .then((post) => { success(res, data)})
    .catch((err) => { error(res, err)})
}

module.exports = {
  create,
  update,
  get,
  destroy
}
