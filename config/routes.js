'use strict'
const express    = require('express')
const router     = new express.Router()
const postCtrl   = require('../controllers/posts')
const {checkAuth} = require('../controllers/auth')


// UNPROTECTED
router.get('/test', (req, res) => {
  res.json('api alive')
})

router.use(checkAuth)

// PROTECTED ROUTES
router.post('/post/create', postCtrl.create)

module.exports = router
