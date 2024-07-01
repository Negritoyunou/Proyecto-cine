const Movies = require('../models/Movies');

// const axios = require('axios');

// class Movie {
//     constructor(title, poster, director, year, duration, genre, rate) {
//         if (!title || !poster || !director) {
//             throw new Error("El título, el póster y el director son obligatorios.");
//         }

//         this.title = title;
//         this.poster = poster;
//         this.director = director;
//         this.year = year;
//         this.duration = duration;
//         this.genre = genre;
//         this.rate = rate;
//     }

//     toString() {
//         return `${this.title} (${this.year}) - Dirigida por ${this.director}`;
//     }
// }

// module.exports = {
//     Movie: Movie,

//     fetchMoviesFromAPI: async () => {
//         try {
//             const response = await axios('https://students-api.up.railway.app/movies');
//             if (response.status !== 200) {
//                 throw new Error('No se pudo obtener los datos de las películas');
//             }
//             return response.data; 
//         } catch (error) {
//             console.error('Error al obtener las películas:', error);
//         }
//     },

//     createMovieInstances: (moviesData) => {
//         try {
//             return moviesData.map(
//                 (movie) =>
//                     new Movie(
//                         movie.title,
//                         movie.poster,
//                         movie.director,
//                         movie.year,
//                         movie.duration,
//                         movie.genre,
//                         movie.rate
//                     )
//             );
//         } catch (error) {
//             console.error('Error al crear instancias de película:', error);
//             throw error;
//         }
//     },

//     getAllMovies: async () => {
//         try {
//             const moviesData = await module.exports.fetchMoviesFromAPI();
//             return module.exports.createMovieInstances(moviesData);
//         } catch (error) {
//             console.error('Error al obtener todas las películas:', error);
//             throw error;
//         }
//     },
// };

module.exports = {
    getMovies: async () => {
            const movies = await Movies.find();
            return movies;
        },

    createMovie: async (movieData) => {
            const newMovie = new Movies(movieData);
            const savedMovie = await newMovie.save();
            return savedMovie;
        }
    }
        
