// Funciones para manejar las tarjetas de películas
function createMovieCard(movie) {
  const movieCard = document.createElement('li');
  movieCard.className = 'movie-card';

  const poster = document.createElement('img');
  poster.src = movie.url;
  poster.alt = movie.title;
  movieCard.appendChild(poster);

  const info = document.createElement('div');
  info.className = 'movie-info';

  const title = document.createElement('h3');
  title.textContent = movie.title;
  title.style.fontWeight = 'bold';
  info.appendChild(title);

  const details = document.createElement('p');
  details.textContent = `${movie.year} | ${movie.duration}`;
  info.appendChild(details);

  const director = document.createElement('p');
  director.textContent = `Director: ${movie.director}`;
  info.appendChild(director);

  const genre = document.createElement('p');
  genre.textContent = `Generos: ${movie.genre}`;
  info.appendChild(genre);


  const rate = document.createElement('p');
  rate.textContent = `Puntuación: ${movie.rate}`;
  info.appendChild(rate);

  movieCard.appendChild(info);
  
  return movieCard;
}

function displayMovies(moviesData) {
  const movieList = document.querySelector('.movie-list');
  const movieCards = moviesData.map(createMovieCard);
  movieList.append(...movieCards);
}

function handleError(error) {
  console.error('Error al obtener los datos:', error);
  // Aquí también podrías mostrar un mensaje de error en la interfaz de usuario
}

// Funciones para el slider
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentSlide = 0;

  function showSlide(n) {
    slides.forEach((slide, index) => {
      if (index === n) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Mostrar la primera diapositiva al cargar la página
  showSlide(currentSlide);
}

module.exports = {
  createMovieCard,
  displayMovies,
  handleError,
  initSlider
};