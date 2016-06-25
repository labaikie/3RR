'use strict'
const mongoose = require('mongoose')

const User = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false }
})

module.exports = mongoose.model('User', User)
