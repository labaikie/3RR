const User    = require('../models/User')
const success = require('../libs/success')
const error   = require('../libs/error')

function create(req, res) {
  const user = new User
  user.userName = req.body.userName
  user.password = req.body.password
  if(user.userName && user.password) {
    user.save()
      .then((user) => { success(res, 'user created') })
      .catch((err) => { error(res, err) })
  } else {
    error(res, 'check username & password')
  }
}

module.exports = { create }
