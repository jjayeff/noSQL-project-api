const MovieController = require('../controllers/movie_controller')
const ActorController = require('../controllers/actor_controller')

module.exports = (app) => {
    app.get('/api/movies', MovieController.greeting)
    app.post('/api/movies/create', MovieController.create)
    app.post('/api/movies/edit/:id', MovieController.edit)
    app.get('/api/movies/delete/:id', MovieController.delete)
    app.get('/api/actors', ActorController.greeting)
    app.post('/api/actors/create', ActorController.create)
    app.post('/api/actors/edit/:id', ActorController.edit)
    app.get('/api/actors/delete/:id', ActorController.delete)
}