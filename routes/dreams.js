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

// @desc    Show edit page
// @route   GET /dreams/edit/:id
router.get('/edit/:id', ensureAuth, async (req, res) => {
    try {
        const dream = await Dream.findOne({
            _id: req.params.id,
        }).lean()

        if (!dream) {
            return res.render('error/404')
        }

        if (dream.user != req.user.id) {
            res.redirect('/dreamlist')
        } else {
            res.render('dreams/edit', {
                dream,
            })
        }
    } catch (err) {
        console.error(err)
        return res.render('error/500')
    }
})

// @desc    Update dream
// @route   PUT /dreams/:id
router.put('/:id', ensureAuth, async (req, res) => {
    try {
        let dream = await Dream.findById(req.params.id).lean()

        if (!dream) {
            return res.render('error/404')
        }

        if (dream.user != req.user.id) {
            res.redirect('/dreamlist')
        } else {
            dream = await Dream.findOneAndUpdate({ _id: req.params.id }, req.body, {
                new: true,
                runValidators: true,
            })

            res.redirect('/dreamlist')
        }
    } catch (err) {
        console.error(err)
        return res.render('error/500')
    }
})

// @desc    Delete dream
// @route   DELETE /dreams/:id
router.delete('/:id', ensureAuth, async (req, res) => {
    try {
        let dream = await Dream.findById(req.params.id).lean()

        if (!dream) {
            return res.render('error/404')
        }

        if (dream.user != req.user.id) {
            res.redirect('/dreamlist')
        } else {
            await Dream.remove({ _id: req.params.id })
            res.redirect('/dreamlist')
        }
    } catch (err) {
        console.error(err)
        return res.render('error/500')
    }
})

module.exports = router