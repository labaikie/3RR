'use strict'
const express  = require('express')
const router   = new express.Router()
const postCtrl = require('../controllers/posts')
const authCtrl = require('../controllers/auth')
const userCtrl = require('../controllers/users')

// UNPROTECTED
router.get('/test', (req, res) => { res.json('api alive') })
router.post('/authenticate', authCtrl.authenticate)
router.post('/user/create', userCtrl.create)

router.use(authCtrl.checkAuth)

// PROTECTED ROUTES
router.post('/post/create', postCtrl.create)
router.put('/user/update', userCtrl.update)

module.exports = router
