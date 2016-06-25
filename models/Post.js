'use strict'
const mongoose = require('mongoose')

const Post = new mongoose.Schema({
  body: { type: String, required: true },
  title: { type: String, required: true },
  assets: [{ type: String }],
  location: {},
  comments: [{ type: String, ref: 'Comment', unique: true }],
  tags: [{ type: String, ref: 'Tag', unique: true }]
}, { timestamps: true })

module.exports = mongoose.model('Post', Post)
