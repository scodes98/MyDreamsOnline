const express = require('express')
const router = express.Router()
// const { ensureAuth } = require('../middleware/auth')

const Dream = require('../models/Dream')



// @desc    Show all dreams
// @route   GET /dreams
router.get('/', async (req, res) => {
    try {
        const dreams = await Dream.find({ status: 'public' })
            .populate('user')
            .sort({ createdAt: 'desc' })
            .lean()

        res.render('dreams/explore', {
            dreams,
        })
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

module.exports = router