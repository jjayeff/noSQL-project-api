const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ActorSchema = require('./actorSchema')

const Actor = mongoose.model('actor', ActorSchema)

module.exports = Actor