const mongoose = require('mongoose')

const Schema = mongoose.Schema

// blueprint
const fruitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String, 
        required: true
    },
    readyToEat: {
        type: Boolean,
        required: true
    }
})

// takes two arguments, first argument collection
const Fruit = mongoose.model('fruits', fruitSchema)

module.exports = Fruit