const mongoose = require('mongoose');
const yogurtShema = mongoose.Schema({
    name: String,
    bestBy: Number,
    flavor: String,
})

const Yogurt = mongoose.model('Yogurt', yogurtShema)

module.exports = Yogurt