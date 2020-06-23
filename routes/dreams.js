const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
const Dream = require('../models/Dream')



// @desc    Show add page
// @route   GET /dreams/add
router.get('/add', ensureAuth, (req, res) => {
    res.render('dreams/add')
})

// @desc    Process add form
// @route   POST /dreams
router.post('/', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id
        await Dream.create(req.body)
        res.redirect('/dreamlist')
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

module.exports = router