const moviesService = require('../services/moviesService');

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await moviesService.getAllMovies();
            res.json(movies);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};