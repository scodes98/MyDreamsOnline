const mongoose = require('mongoose')

const DreamSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        default: 'public',
        enum: ['public', 'private'],
    },
    state: {
        type: String,
        default: 'pending',
        enum: ['pending', 'on it', 'done'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Dream', DreamSchema)