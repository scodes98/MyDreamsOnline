const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc landing page
// @route GET /
router.get('/', (req, res) => {
    res.render('homepage')
})

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/dreamlist')
    }
)



module.exports = router