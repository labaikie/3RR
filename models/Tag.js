'use strict'
const mongoose = require('mongoose')

const Tag = new mongoose.Schema({
  name: { type: String, required: true }
})

module.exports = mongoose.model('Tag', Tag)
