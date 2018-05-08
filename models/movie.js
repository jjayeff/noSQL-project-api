const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ActorSchema = require('./actorSchema')

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imdb: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    type: {
        type: Array,
        required: true
    },
    actors: [ActorSchema]
})

const Movie = mongoose.model('movie', MovieSchema)

module.exports = Movie