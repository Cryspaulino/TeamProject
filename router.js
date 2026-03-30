/* ==========================================
   ROUTER.JS MODULE
   
   REQUIREMENT: URL parameters
   REQUIREMENT: Use of modules for organization
   
   This module handles URL parameters and navigation:
   - Parsing URL parameters (e.g., ?id=5)
   - Navigating between pages with parameters
   - Managing browser history
   ========================================== */

/* ==========================================
   GET URL PARAMETER
   REQUIREMENT: URL parameters
   
   Returns the value of a specific URL parameter
   Example: If URL is movie.html?id=5, getURLParameter('id') returns "5"
   ========================================== */
export function getURLParameter(param) {
    // URLSearchParams is a built-in browser API
    // It parses the query string (everything after ?)
    const urlParams = new URLSearchParams(window.location.search);
    
    // Get the value for the specified parameter
    // Returns null if parameter doesn't exist
    const value = urlParams.get(param);
    
    console.log(`🔍 URL parameter '${param}':`, value);
    return value;
}

/* ==========================================
   GET ALL URL PARAMETERS
   Returns an object with all URL parameters
   
   Example: If URL is movie.html?id=5&genre=sci-fi
   Returns: { id: "5", genre: "sci-fi" }
   ========================================== */
export function getAllURLParameters() {
    const params = {};
    const urlParams = new URLSearchParams(window.location.search);
    
    // Iterate through all parameters
    for (const [key, value] of urlParams) {
        params[key] = value;
    }
    
    return params;
}

/* ==========================================
   NAVIGATE TO MOVIE DETAIL PAGE
   REQUIREMENT: URL parameters
   
   Used when clicking a movie card
   Navigates to movie.html with the movie ID in the URL
   ========================================== */
export function navigateToMovie(movieId) {
    console.log(`🎬 Navigating to movie: ${movieId}`);
    // window.location.href changes the current page
    // We add ?id= to pass the movie ID
    window.location.href = `movie.html?id=${movieId}`;
}

/* ==========================================
   NAVIGATE WITH MULTIPLE PARAMETERS
   Build URL with multiple query parameters
   
   Example:
   navigateWithParams('movie.html', { id: 5, highlight: 'cast' })
   Goes to: movie.html?id=5&highlight=cast
   ========================================== */
export function navigateWithParams(page, params) {
    // Build query string from params object
    const queryString = new URLSearchParams(params).toString();
    window.location.href = `${page}?${queryString}`;
}

/* ==========================================
   UPDATE URL WITHOUT RELOAD
   Updates the URL in the address bar without reloading the page
   Useful for filters without refreshing
   ========================================== */
export function updateURLParameter(key, value) {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    
    // pushState updates URL without reload
    window.history.pushState({}, '', url);
}

console.log('🗺️ router.js module loaded - URL routing active!');
