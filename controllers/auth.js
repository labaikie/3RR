'use strict'
const User = require('../models/User')
const jwt  = require('jsonwebtoken')
const error = require('../libs/error')
const success = require('../libs/success')

function authenticate(req, res) {

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
