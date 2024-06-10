const { displayMovies, handleError, initSlider } = require('./movieUtils.js');
const axios = require('axios');

// // Función para obtener datos desde el servidor externo
// function fetchMoviesFromApi() {
//   $.get('https://students-api.up.railway.app/movies')
//     .done(displayMovies)
//     .fail(handleError);
// }

// // Llamar a la función para obtener los datos
// fetchMoviesFromApi();

// // Inicializar el slider
// initSlider();

const fetchMovies = async () => {
  try {
    const response = await axios('https://students-api.up.railway.app/movies');
    displayMovies(response.data);
  } catch (error) {
    handleError(error);
  }
}

fetchMovies();

// Inicializar el slider
initSlider();

// // Función para obtener datos desde el servidor externo
// function fetchMoviesFromApi() {
//   const promise = axios('https://students-api.up.railway.app/movies');

//   promise
//     .then(res => {
//       showMovies(res.data);
//     })
//     .catch(err => {
//       console.error(`El error es el siguiente: ${err}`);
//     });
// }
// // Llamar a la función para obtener los datos
// fetchMoviesFromApi();

// // Inicializar el slider
// initSlider();