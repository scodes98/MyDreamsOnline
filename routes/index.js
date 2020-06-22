const express = require('express')
const router = express.Router()

// @desc landing page
// @route GET /
router.get('/', (req, res) => {
    res.render('homepage')
})

// @desc login page
// @route GET /login
router.get('/login', (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})

// @desc dream list page
// @route GET /dreamlist
router.get('/dreamlist', (req, res) => {
    res.render('dreamList')
})



module.exports = router