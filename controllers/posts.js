'use strict'
const Post = require('../models/Post')
const success = require('../libs/success')
const error = require('../libs/error')

function create(req, res) {
  const body = req.body
  const post = new Post(body)
  post.save()
    .then((data) => { success(res, data) })
    .catch((err) => { error(res, err) })
}

function update(req, res) {
  Post.findById(id, function(err, post){
      const body = req.body
      if (body)     post.title    = req.body.title
  }
}

var delete = function(req, res){
    Post.remove({ id }, function(err, post){
        if(err) return res.send(err)
        res.json({message:'Post deleted!'});
    });
}

module.exports = {
  create,
  update,
}
