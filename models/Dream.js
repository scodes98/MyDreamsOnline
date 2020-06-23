const mongoose = require('mongoose')
// autoIncrement = require('mongoose-auto-increment');

// var connection = mongoose.createConnection(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// });
// autoIncrement.initialize(connection);

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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

// DreamSchema.plugin(autoIncrement.plugin, {
//     model: 'Dream',
//     field: 'dnumber',
//     startAt: 1,
//     incrementBy: 1,
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',

// });

module.exports = mongoose.model('Dream', DreamSchema)