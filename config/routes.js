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
router.put('/post/update', postCtrl.update)
router.get('/post/create', postCtrl.get)
router.delete('/post/delete', postCtrl.delete)

module.exports = router
