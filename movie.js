


/* ==========================================
   MOVIE.JS - Movie Detail Page Script
   
   REQUIREMENT: URL parameters
   
      ========================================== */

import { getMovieById } from './data.js';
import { getURLParameter } from './router.js';
import { renderMovieDetail } from './ui.js';
import { saveToWatchlist, isInWatchlist } from './storage.js';

console.log('✅ movie.js loaded successfully!');
console.log('📄 Movie detail page initialized');

/* ==========================================
   INITIALIZE DETAIL PAGE
   Runs when page loads
   REQUIREMENT: URL parameters & API fetching
   ========================================== */
async function initDetailPage() {
    console.log('🚀 Initializing movie detail page...');
    
    // REQUIREMENT: URL parameters
    // Step 1: Get movie ID from URL
    const movieId = getURLParameter('id');
    
    if (!movieId) {
        console.error('❌ No movie ID in URL');
        showNoMovieError();
        return;
    }
    
    // Show loading state
    const detailSection = document.getElementById('movie-detail');
    if (detailSection) {
        detailSection.innerHTML = `
            <p style="text-align: center; grid-column: 1/-1; font-size: 1.2rem;">
                🎬 Loading movie details from OMDb...
            </p>
        `;
    }
    
    try {
        // REQUIREMENT: Fetching data from API
        // Step 2: Load movie data from OMDb
        console.log(`🔍 Loading movie with ID: ${movieId}`);
        const movie = await getMovieById(movieId);
        
        if (!movie) {
            throw new Error('Movie not found');
        }
        
        // Step 3: Render the movie details
        renderMovieDetail(movie);
        
        // Step 4: Set up watchlist button
        setupWatchlistButton(movie);
        
        // Step 5: Set up random pick button (optional)
        setupRandomPickButton();
        
        console.log('✨ Movie detail page initialized successfully!');
        
    } catch (error) {
        console.error('❌ Error loading movie:', error);
        showLoadError();
    }
}

/* ==========================================
   SETUP WATCHLIST BUTTON
   REQUIREMENT: Local storage for persistence
   ========================================== */
function setupWatchlistButton(movie) {
    const btn = document.getElementById('add-to-watchlist');
    
    if (!btn) {
        console.warn('⚠️ Add to watchlist button not found');
        return;
    }
    
    // Check if already in watchlist
    if (isInWatchlist(movie.id)) {
        btn.innerHTML = '<span class="btn-icon">✓</span> In Watchlist';
        btn.classList.add('in-watchlist');
    }
    
    // Add click handler
    btn.addEventListener('click', () => {
        const success = saveToWatchlist(movie);
        
        if (success) {
            btn.innerHTML = '<span class="btn-icon">✓</span> Added to Watchlist!';
            btn.classList.add('in-watchlist');
            
            // Change text after a moment
            setTimeout(() => {
                btn.innerHTML = '<span class="btn-icon">✓</span> In Watchlist';
            }, 2000);
        } else {
            btn.innerHTML = '<span class="btn-icon">★</span> Already in Watchlist';
            setTimeout(() => {
                btn.innerHTML = '<span class="btn-icon">✓</span> In Watchlist';
            }, 2000);
        }
    });
    
    console.log('⭐ Watchlist button set up');
}

/* ==========================================
   SETUP RANDOM PICK BUTTON
   Navigates back to index page (could add animation later)
   ========================================== */
function setupRandomPickButton() {
    const btn = document.getElementById('random-pick');
    
    if (!btn) {
        console.warn('⚠️ Random pick button not found');
        return;
    }
    
    btn.addEventListener('click', () => {
        // For now, just go back to main page
        // In future: Could add roulette/spinner animation here
        window.location.href = 'index.html';
    });
    
    console.log('🎲 Random pick button set up');
}

/* ==========================================
   ERROR DISPLAY FUNCTIONS
   ========================================== */
function showNoMovieError() {
    document.body.innerHTML = `
        <div style="text-align: center; padding: 50px; color: var(--color-text-primary);">
            <h2>No movie specified</h2>
            <p>Please select a movie from the main page.</p>
            <a href="index.html" style="color: var(--color-gold); text-decoration: none; font-size: 1.1rem;">
                ← Back to movies
            </a>
        </div>
    `;
}

function showLoadError() {
    document.body.innerHTML = `
        <div style="text-align: center; padding: 50px; color: var(--color-text-primary);">
            <h2>Error loading movie</h2>
            <p>Could not load movie details. Please try again.</p>
            <a href="index.html" style="color: var(--color-gold); text-decoration: none; font-size: 1.1rem;">
                ← Back to movies
            </a>
        </div>
    `;
}

/* ==========================================
   START THE DETAIL PAGE
   Wait for DOM to be ready, then initialize
   ========================================== */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDetailPage);
} else {
    // DOM already loaded
    initDetailPage();
}
