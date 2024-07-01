const { Router } = require('express');
const moviesController = require('../controllers/moviesController');
const validateMovieData = require('../middlewares/validateMovieData')

const movieRouter = Router();

movieRouter.get('/', moviesController.getAllMovies);
movieRouter.post('/createMovie', validateMovieData, moviesController.addMovie);

module.exports = movieRouter;