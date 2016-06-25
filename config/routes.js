'use strict'
const express  = require('express')
const router   = new express.Router()
const postCtrl = require('../controllers/posts')
const authCtrl = require('../controllers/auth')
const userCtrl = require('../controllers/users')
const tagCtrl    = require('../controllers/tags')


// UNPROTECTED
// router.get('/test', (req, res) => { res.json('api alive') })
router.post('/authenticate', authCtrl.authenticate)

router.post('/user/create', userCtrl.create)

router.use(authCtrl.checkAuth)

// PROTECTED ROUTES

router.put('/user/update', userCtrl.update)

router.post('/post/create', postCtrl.create)
router.put('/post/update', postCtrl.update)
router.get('/post', postCtrl.get)
router.delete('/post/delete', postCtrl.destroy)
router.post('/post/getByTag', postCtrl.getByTag)

router.post('/tag/create', tagCtrl.create)
router.get('/tag', tagCtrl.get)

module.exports = router
