const { getMovies } = require('../services/moviesService');
const { createMovie } = require('../services/moviesService');	

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await getMovies();
            res.status(200).json(movies);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },

    addMovie: async (req, res) => {

        try {

            const { title, director, year, duration, genre, rate, url } = req.body;
            const newMovieData = { title, director, year, duration, genre, rate, url };
            const newMovie = await createMovie(newMovieData);
            res.status(201).json(newMovie);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
};