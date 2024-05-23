// Obtener la referencia al contenedor de películas
const movieList = document.querySelector('.movie-list');

// Mapear los datos de las películas y generar elementos HTML
tempData.forEach(movie => {
  const movieCard = document.createElement('li');
  movieCard.className = 'movie-card';

  const poster = document.createElement('img');
  poster.src = movie.poster;
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

  const genres = document.createElement('p');
  genres.textContent = `Géneros: ${movie.genre.join(', ')}`;
  info.appendChild(genres);

  const rate = document.createElement('p');
  rate.textContent = `Puntuación: ${movie.rate}`;
  info.appendChild(rate);

  movieCard.appendChild(info);

  movieList.appendChild(movieCard);
});

// console.log(tempData);

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




