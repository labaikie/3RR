'use strict'
const mongoose = require('mongoose')

const Comment = new mongoose.Schema({
  name: { type: String, required: true },
  body: { type: String, required: true },
  email: { type: String, required: true },
  comments: [{ type: String, ref: 'Comment', unique: true }]
}, { timestamps: true })

module.exports = mongoose.model('Comment', Comment)
