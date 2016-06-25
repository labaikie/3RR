'use strict'
const User = require('../models/User')
const jwt  = require('jsonwebtoken')
const error = require('../libs/error')
const success = require('../libs/success')

function authenticate(req, res) {
  const query = User.findOne({ email: req.body.email }).exec()
  query
    .then((user) => {
      if(user.password != req.body.password) {
        error(res, 'wrong password')
      } else {
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: 3600 })
        const response = { token: token, user: user }
        return success(res, response)
      }
    })
    .catch((err) => { return error(res, 'No user') })
}

function checkAuth(req, res, next) {
  const token = req.headers['x-access-token']
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return error(res, err)
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else { error(res, 'missing x-access-token header') }
}

module.exports = {
  authenticate,
  checkAuth
}
