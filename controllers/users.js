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

function update(req, res) {
  const currentAccount = req.decoded._doc
  const updates = req.body
  const query = User.findByIdAndUpdate(currentAccount._id, updates, { new: true }).exec()
  query
    .then((user) => { success(res, data) })
    .catch((err) => { error(res, err) })
}

module.exports = { create, update }
