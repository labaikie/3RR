'use strict'
const Tag = require('../models/Tag')
const success = require('../libs/success')
const error = require('../libs/error')

function create(req, res) {
  const body = req.body
  const tag = new Post(body)
  tag.save()
    .then((data) => { success(res, data) })
    .catch((err) => { error(res, err) })
}

module.exports = {
  create
}
