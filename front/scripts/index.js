// index.js

import { displayMovies, handleError, initSlider } from './movieUtils.js';

// Función para obtener datos desde el servidor externo
function fetchMoviesFromApi() {
  $.get('https://students-api.up.railway.app/movies')
    .done(displayMovies)
    .fail(handleError);
}

// Llamar a la función para obtener los datos
fetchMoviesFromApi();

// Inicializar el slider
initSlider();