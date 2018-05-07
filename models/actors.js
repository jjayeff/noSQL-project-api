const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ActorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

const Actor = mongoose.model('actor', ActorSchema)

module.exports = Actor