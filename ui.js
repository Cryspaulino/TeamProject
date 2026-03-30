/* ==========================================
   UI.JS MODULE - DOM MANIPULATION
   
   REQUIREMENT: Good UX
   REQUIREMENT: Use of modules for organization
   
   This module handles all DOM manipulation and UI updates:
   - Rendering movie cards dynamically
   - Updating the watchlist counter
   - Populating the movie detail page
   - Creating HTML elements from movie data
   ========================================== */

/* ==========================================
   RENDER MOVIE GRID
   Takes an array of movies and displays them
   Replaces the static HTML with dynamic content
   ========================================== */
export function renderMovieGrid(movies) {
    const grid = document.getElementById('movie-grid');
    
    if (!grid) {
        console.error('❌ Movie grid element not found');
        return;
    }
    
    // Clear existing content (removes the hardcoded HTML)
    grid.innerHTML = '';
    
    // Check if there are movies to display
    if (movies.length === 0) {
        grid.innerHTML = `
            <p style="text-align: center; grid-column: 1/-1; font-size: 1.2rem; color: var(--color-text-muted);">
                No movies found for this genre. Try selecting "All Genres".
            </p>
        `;
        return;
    }
    
    console.log(`🎨 Rendering ${movies.length} movies`);
    
    // Create and append each movie card
    movies.forEach(movie => {
        const card = createMovieCard(movie);
        grid.appendChild(card);
    });
}

/* ==========================================
   CREATE MOVIE CARD ELEMENT
   Returns an HTML element for a single movie
   This creates the same structure as the static HTML
   ========================================== */
export function createMovieCard(movie) {
    // Create article element
    const article = document.createElement('article');
    article.className = 'movie-card';
    article.dataset.genre = movie.genre; // For filtering
    
    // Build the HTML structure (matches your index.html structure)
    article.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.poster}" 
                 alt="${movie.title} poster" 
                 loading="lazy">
            <div class="movie-overlay">
                <button class="quick-add" 
                        data-id="${movie.id}"
                        aria-label="Add ${movie.title} to watchlist">
                    +
                </button>
            </div>
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span class="movie-year">${movie.year}</span>
                <span class="movie-genre">${movie.rated || movie.genre}</span>
            </div>
            <p class="movie-rating">⭐ ${movie.rating}/10</p>
        </div>
    `;
    
    // Add click handler to navigate to detail page
    // REQUIREMENT: URL parameters
    article.addEventListener('click', (e) => {
        // Don't navigate if clicking the quick-add button
        if (!e.target.classList.contains('quick-add')) {
            // Navigate to movie detail page with ID in URL
            window.location.href = `movie.html?id=${movie.id}`;
        }
    });
    
    // Add watchlist button handler
    // REQUIREMENT: Local storage for persistence
    const quickAdd = article.querySelector('.quick-add');
    if (quickAdd) {
        quickAdd.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click
            
            // This will work once storage.js is implemented
            // For now, just show visual feedback
            quickAdd.textContent = '✓';
            quickAdd.style.background = 'var(--color-spotlight)';
            
            console.log(`Added ${movie.title} to watchlist (storage pending)`);
            
            // Reset after animation
            setTimeout(() => {
                quickAdd.textContent = '+';
                quickAdd.style.background = '';
            }, 1000);
        });
    }
    
    return article;
}

/* ==========================================
   UPDATE WATCHLIST COUNTER
   REQUIREMENT: Local storage for persistence
   Shows how many movies are in the watchlist
   
   NOTE: This will work fully when storage.js is implemented
   For now, it just updates the display
   ========================================== */
export function updateWatchlistCount() {
    const counter = document.getElementById('watchlist-count');
    
    if (!counter) {
        console.warn('⚠️ Watchlist counter element not found');
        return;
    }
    
    // This will work when storage.js getWatchlist() is implemented
    // For now, just keep it at 0 or a placeholder
    try {
        // Attempt to get from localStorage if storage.js is ready
        const data = localStorage.getItem('movienight_watchlist');
        const watchlist = data ? JSON.parse(data) : [];
        counter.textContent = watchlist.length;
        console.log(`📊 Watchlist count updated: ${watchlist.length}`);
    } catch (error) {
        // If storage not ready, keep at 0
        counter.textContent = '0';
    }
}

/* ==========================================
   RENDER MOVIE DETAIL PAGE
   Fills in all the details on movie.html
   REQUIREMENT: URL parameters
   ========================================== */
export function renderMovieDetail(movie) {
    if (!movie) {
        // If no movie found, show error message
        const container = document.querySelector('.container');
        if (container) {
            container.innerHTML = `
                <div style="text-align: center; padding: 50px; color: var(--color-text-primary);">
                    <h2>Movie not found</h2>
                    <p>The requested movie could not be found.</p>
                    <a href="index.html" style="color: var(--color-gold);">← Back to movies</a>
                </div>
            `;
        }
        return;
    }
    
    // Helper function to safely update text content
    const updateElement = (id, value) => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = value;
        } else {
            console.warn(`⚠️ Element #${id} not found`);
        }
    };
    
    // Update all the detail elements
    updateElement('detail-title', movie.title);
    updateElement('detail-year', movie.year);
    updateElement('detail-genre', movie.rated || movie.genre);
    updateElement('detail-runtime', movie.runtime);
    updateElement('detail-rating', `⭐ ${movie.rating}/10`);
    updateElement('detail-plot', movie.plot);
    updateElement('detail-director', movie.director);
    updateElement('detail-cast', movie.cast);
    
    // Update poster image
    const posterImg = document.getElementById('detail-poster-img');
    if (posterImg) {
        posterImg.src = movie.poster;
        posterImg.alt = `${movie.title} poster`;
    }
    
    // Update page title (browser tab)
    document.title = `${movie.title} | Movie Night Decider`;
    
    console.log(`🎬 Rendered details for: ${movie.title}`);
}

/* ==========================================
   SHOW LOADING STATE
   REQUIREMENT: Good UX
   Displays a loading message while data is being fetched
   ========================================== */
export function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('loading');
        element.innerHTML = `
            <p style="text-align: center; grid-column: 1/-1; font-size: 1.2rem;">
                🎬 Loading movies from OMDb API...
            </p>
        `;
    }
}

/* ==========================================
   HIDE LOADING STATE
   Removes the loading indicator
   ========================================== */
export function hideLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove('loading');
    }
}

/* ==========================================
   SHOW ERROR MESSAGE
   REQUIREMENT: Good UX
   Displays an error message to the user
   ========================================== */
export function showError(message, elementId = 'movie-grid') {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `
            <div style="text-align: center; grid-column: 1/-1; padding: 50px;">
                <p style="font-size: 1.5rem; color: var(--color-gold); margin-bottom: 1rem;">
                    ⚠️ ${message}
                </p>
                <button onclick="location.reload()" 
                        style="padding: 0.75rem 1.5rem; 
                               background: var(--color-gold); 
                               color: var(--color-screen); 
                               border: none; 
                               border-radius: 8px; 
                               cursor: pointer;
                               font-size: 1rem;">
                    Try Again
                </button>
            </div>
        `;
    }
}

/* ==========================================
   FILTER CARDS BY GENRE (ALTERNATIVE METHOD)
   Alternative to re-rendering - just hide/show existing cards
   Useful if you want to keep the static HTML and just filter it
   ========================================== */
export function filterCardsByGenre(genre) {
    const cards = document.querySelectorAll('.movie-card');
    
    cards.forEach(card => {
        const cardGenre = card.dataset.genre;
        
        if (genre === 'all' || cardGenre === genre) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    console.log(`🎭 Filtered to genre: ${genre}`);
}

// Log that module is loaded
console.log('🎨 ui.js module loaded - UI functions ready!');
