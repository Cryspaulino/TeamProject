/* ==========================================
   MAIN.JS - Entry Point for Movie Night Decider

   Loads the movie grid, filters by genre, updates
   the watchlist count, and picks a random movie
   from the currently selected genre.
   ========================================== */

import { loadMovies, filterMoviesByGenre, getRandomMovie, displayMovie } from './data.js';
import { updateWatchlistCount } from './storage.js';
import { renderMovieGrid, showLoading, showError } from './ui.js';

console.log('✅ main.js loaded successfully!');
console.log('🎬 Movie Night Decider initialized');

let allMovies = [];
let filteredMovies = [];

async function initApp() {
    console.log('🚀 Initializing app...');

    showLoading('movie-grid');

    const button = document.getElementById("random-movie-btn");

    await loadMovies();

    button.addEventListener("click", () => {
        displayMovie(getRandomMovie());
    });

    try {
        allMovies = await loadMovies();

        if (allMovies.length === 0) {
            showError('Failed to load movies. Please check your internet connection.');
            return;
        }

        filteredMovies = [...allMovies];
        renderMovieGrid(filteredMovies);
        setupGenreFilter();
        setupRandomMovieButton();
        updateWatchlistCount();

        console.log('✨ App initialized successfully!');
    } catch (error) {
        console.error('❌ Error initializing app:', error);
        showError('Error loading movies. Please refresh the page.');
    }
}

function setupGenreFilter() {
    const dropdown = document.getElementById('genre-filter');

    if (!dropdown) {
        console.warn('⚠️ Genre filter dropdown not found');
        return;
    }

    dropdown.addEventListener('change', (e) => {
        const selectedGenre = e.target.value;
        console.log(`🎭 Filtering by genre: ${selectedGenre}`);

        filteredMovies = filterMoviesByGenre(allMovies, selectedGenre);
        renderMovieGrid(filteredMovies);
    });

    console.log('🎛️ Genre filter set up');
}

function setupRandomMovieButton() {
    const randomBtn = document.getElementById('random-movie-btn');

    if (!randomBtn) {
        console.warn('⚠️ Random movie button not found');
        return;
    }

    randomBtn.addEventListener('click', () => {
        const moviePool = filteredMovies.length > 0 ? filteredMovies : allMovies;
        const randomMovie = getRandomMovie(moviePool);

        if (!randomMovie) {
            showError('No movies are available for that genre yet.');
            return;
        }

        console.log(`🎲 Random movie selected: ${randomMovie.title}`);
        window.location.href = `movie.html?id=${randomMovie.id}`;
    });

    console.log('🎲 Random movie button set up');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
