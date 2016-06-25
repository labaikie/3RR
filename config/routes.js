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

router.post('/post/create', postCtrl.create)
router.put('/post/update', postCtrl.update)
router.get('/post/get', postCtrl.get)
router.delete('/post/delete', postCtrl.destroy)

router.post('/post/getByTag', postCtrl.getByTag)

router.use(checkAuth)

// PROTECTED ROUTES

router.put('/user/update', userCtrl.update)

module.exports = router
