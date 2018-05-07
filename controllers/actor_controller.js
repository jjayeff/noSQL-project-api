const Actor = require('../models/actors')

module.exports = {
    async greeting(req, res) {
        Actor.find().sort({_id:-1})
            .then(actor => res.send(actor))
    },

    create(req, res, next) {
        const actorProps = req.body
        Actor.create(actorProps)
            .then(actor => {
                Actor.find().sort({_id:-1})
                    .then(actor => res.send(actor))
            })
            .catch(next)
    },

    edit(req, res, next) {
        const actorId = req.params.id
        const actorProps = req.body
        Actor.findByIdAndUpdate({ _id: actorId }, actorProps)
            .then(actor => {
                Actor.find().sort({_id:-1})
                    .then(actor => res.send(actor))
            })
            .catch(next) 
    },

    delete(req, res, next) {
        const actorId = req.params.id
        Actor.findByIdAndRemove({ _id: actorId })         
            .then(actor => {
                Actor.find().sort({_id:-1})
                .then(actor => res.send(actor))
            })
            .catch(next)      
    }
}