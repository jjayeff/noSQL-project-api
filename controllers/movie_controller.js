const Movie = require('../models/movie')
const Actor = require('../models/actors')

module.exports = {
    async greeting(req, res) {
        Movie.find().sort({_id:-1})
            .then(movie => res.send(movie))
    },

    async create(req, res, next) {
        const movieProps = req.body
        await movieProps.actors.map(async actor => {
            await Actor.findOne({ 'name': actor.name,'age': actor.age })
                .then(actorDB => {
                    if(actorDB === null) {
                        Actor.create(actor)
                            .then(actorDB => actorArray.push(actorDB.id))
                    }
                })
        })
        await Movie.create(movieProps)
            .then(movie => {
                Movie.find().sort({_id:-1})
                    .then(movie => res.send(movie))
            })
            .catch(next)
    },

    edit(req, res, next) {
        const movieId = req.params.id
        const movieProps = req.body
        Movie.findByIdAndUpdate({ _id: movieId }, movieProps)
            .then(movie => {
                Movie.find().sort({_id:-1})
                    .then(movie => res.send(movie))
            })
            .catch(next) 
    },

    delete(req, res, next) {
        const movieId = req.params.id
        Movie.findByIdAndRemove({ _id: movieId })         
            .then(movie => {
                Movie.find().sort({_id:-1})
                .then(movie => res.send(movie))
            })
            .catch(next)      
    }

}