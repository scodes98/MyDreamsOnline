const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Dream = require('../models/Dream')

// @desc home page
// @route GET /
router.get('/', (req, res) => {
    res.render('home')
})

// @desc login page
// @route GET /login
router.get('/login', (req, res) => {
    res.render('login')
})

// @desc dreamlist page
// @route GET /dreamlist
router.get('/dreamlist', ensureAuth, async (req, res) => {
    try {
        const dreams = await Dream.find({ user: req.user.id }).lean()
        res.render('dreamList', {
            layout: 'dreamlist',
            name: req.user.firstName,
            dreams
        })
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }

})

module.exports = router