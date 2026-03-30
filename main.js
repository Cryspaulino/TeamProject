/* ==========================================
   MAIN.JS - Entry Point for Movie Night Decider
   
   REQUIREMENT: Use of modules for organization
   REQUIREMENT: Fetching data from API
   
   This file loads when index.html opens and:
   - Loads movies from OMDb API
   - Renders the movie grid
   - Sets up genre filtering
   - Updates watchlist count
   ========================================== */

// Import functions from our modules
import { loadMovies, filterMoviesByGenre } from './data.js';
import { updateWatchlistCount } from './storage.js';
import { renderMovieGrid, showLoading, showError } from './ui.js';

console.log('✅ main.js loaded successfully!');
console.log('🎬 Movie Night Decider initialized');
console.log('🌐 OMDb API integration active!');

/* ==========================================
   GLOBAL STATE
   Stores currently loaded movies
   ========================================== */
let allMovies = [];

/* ==========================================
   INITIALIZE APP
   Runs when page loads
   REQUIREMENT: Fetching data from API
   ========================================== */
async function initApp() {
    console.log('🚀 Initializing app...');
    
    // Show loading state
    showLoading('movie-grid');
    
    try {
        // REQUIREMENT: Fetching data from API
        // Load movies from OMDb
        allMovies = await loadMovies();
        
        if (allMovies.length === 0) {
            showError('Failed to load movies. Please check your internet connection.');
            return;
        }
        
        // Render the movie grid
        renderMovieGrid(allMovies);
        
        // Set up genre filter
        setupGenreFilter();
        
        // Update watchlist count
        updateWatchlistCount();
        
        console.log('✨ App initialized successfully!');
        
    } catch (error) {
        console.error('❌ Error initializing app:', error);
        showError('Error loading movies. Please refresh the page.');
    }
}

/* ==========================================
   SETUP GENRE FILTER
   REQUIREMENT: Drop-down menu
   Wires up the genre dropdown to filter movies
   ========================================== */
function setupGenreFilter() {
    const dropdown = document.getElementById('genre-filter');
    
    if (!dropdown) {
        console.warn('⚠️ Genre filter dropdown not found');
        return;
    }
    
    dropdown.addEventListener('change', (e) => {
        const selectedGenre = e.target.value;
        console.log(`🎭 Filtering by genre: ${selectedGenre}`);
        
        // Filter movies
        const filteredMovies = filterMoviesByGenre(allMovies, selectedGenre);
        
        // Re-render grid with filtered movies
        renderMovieGrid(filteredMovies);
    });
    
    console.log('🎛️ Genre filter set up');
}

/* ==========================================
   START THE APP
   Wait for DOM to be ready, then initialize
   ========================================== */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    // DOM already loaded
    initApp();
}
