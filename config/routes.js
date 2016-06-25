'use strict'
const express   = require('express')
const router    = new express.Router()
const postCtrl  = require('../controllers/posts')

// router.get('/test', (req, res) => {
//   res.json('api alive')
// })

router.post('/post/create', postCtrl.create)

module.exports = router
