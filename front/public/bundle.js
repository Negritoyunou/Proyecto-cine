/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _movieUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieUtils.js */ \"./scripts/movieUtils.js\");\n// index.js\r\n\r\n\r\n\r\n// Función para obtener datos desde el servidor externo\r\nfunction fetchMoviesFromApi() {\r\n  $.get('https://students-api.up.railway.app/movies')\r\n    .done(_movieUtils_js__WEBPACK_IMPORTED_MODULE_0__.displayMovies)\r\n    .fail(_movieUtils_js__WEBPACK_IMPORTED_MODULE_0__.handleError);\r\n}\r\n\r\n// Llamar a la función para obtener los datos\r\nfetchMoviesFromApi();\r\n\r\n// Inicializar el slider\r\n(0,_movieUtils_js__WEBPACK_IMPORTED_MODULE_0__.initSlider)();\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/movieUtils.js":
/*!*******************************!*\
  !*** ./scripts/movieUtils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMovieCard: () => (/* binding */ createMovieCard),\n/* harmony export */   displayMovies: () => (/* binding */ displayMovies),\n/* harmony export */   handleError: () => (/* binding */ handleError),\n/* harmony export */   initSlider: () => (/* binding */ initSlider)\n/* harmony export */ });\n// movieUtils.js\r\n\r\n// Funciones para manejar las tarjetas de películas\r\nfunction createMovieCard(movie) {\r\n  const movieCard = document.createElement('li');\r\n  movieCard.className = 'movie-card';\r\n\r\n  const poster = document.createElement('img');\r\n  poster.src = movie.poster;\r\n  poster.alt = movie.title;\r\n  movieCard.appendChild(poster);\r\n\r\n  const info = document.createElement('div');\r\n  info.className = 'movie-info';\r\n\r\n  const title = document.createElement('h3');\r\n  title.textContent = movie.title;\r\n  title.style.fontWeight = 'bold';\r\n  info.appendChild(title);\r\n\r\n  const details = document.createElement('p');\r\n  details.textContent = `${movie.year} | ${movie.duration}`;\r\n  info.appendChild(details);\r\n\r\n  const director = document.createElement('p');\r\n  director.textContent = `Director: ${movie.director}`;\r\n  info.appendChild(director);\r\n\r\n  const genres = document.createElement('p');\r\n  genres.textContent = `Géneros: ${movie.genre.join(', ')}`;\r\n  info.appendChild(genres);\r\n\r\n  const rate = document.createElement('p');\r\n  rate.textContent = `Puntuación: ${movie.rate}`;\r\n  info.appendChild(rate);\r\n\r\n  movieCard.appendChild(info);\r\n  \r\n  return movieCard;\r\n}\r\n\r\nfunction displayMovies(moviesData) {\r\n  const movieList = document.querySelector('.movie-list');\r\n  const movieCards = moviesData.map(createMovieCard);\r\n  movieList.append(...movieCards);\r\n}\r\n\r\nfunction handleError(error) {\r\n  console.error('Error al obtener los datos:', error);\r\n  // Aquí también podrías mostrar un mensaje de error en la interfaz de usuario\r\n}\r\n\r\n// Funciones para el slider\r\nfunction initSlider() {\r\n  const slides = document.querySelectorAll('.slide');\r\n  const prevBtn = document.querySelector('.prev');\r\n  const nextBtn = document.querySelector('.next');\r\n  let currentSlide = 0;\r\n\r\n  function showSlide(n) {\r\n    slides.forEach((slide, index) => {\r\n      if (index === n) {\r\n        slide.style.display = 'block';\r\n      } else {\r\n        slide.style.display = 'none';\r\n      }\r\n    });\r\n  }\r\n\r\n  function nextSlide() {\r\n    currentSlide = (currentSlide + 1) % slides.length;\r\n    showSlide(currentSlide);\r\n  }\r\n\r\n  function prevSlide() {\r\n    currentSlide = (currentSlide - 1 + slides.length) % slides.length;\r\n    showSlide(currentSlide);\r\n  }\r\n\r\n  prevBtn.addEventListener('click', prevSlide);\r\n  nextBtn.addEventListener('click', nextSlide);\r\n\r\n  // Mostrar la primera diapositiva al cargar la página\r\n  showSlide(currentSlide);\r\n}\n\n//# sourceURL=webpack://front/./scripts/movieUtils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;