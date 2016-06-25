'use strict'
const Tag = require('../models/Tag')
const success = require('../libs/success')
const error = require('../libs/error')

function create(req, res) {
  const body = req.body
  const tag = new Tag(body)
  tag.save()
    .then((data) => { success(res, data) })
    .catch((err) => { error(res, err) })
}

function get(req, res) {
  const tagId = req.query.tagId
  const query = Tag.findById(req.query.tagId).exec()
  query
    .then((post) => { success(res, data)})
    .catch((err) => { error(res, err)})
}

function destroy(req, res) {
  const tagId = req.query.tagId
  const query = Tag.findByIdandRemove(TagId).exec()
  query
    .then((data) => { success(res, data) })
    .catch((err) => { error(res, err) })
}

module.exports = {
  create,
  get,
  destroy
}