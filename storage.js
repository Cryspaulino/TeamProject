/* ==========================================
   STORAGE.JS MODULE
   
   REQUIREMENT: Local storage for persistence
   REQUIREMENT: Use of modules for organization
   
   This module handles localStorage operations:
   - Saving watchlist data
   - Retrieving watchlist data
   - Removing from watchlist
   - Checking watchlist status
   ========================================== */

const WATCHLIST_KEY = 'movienight_watchlist';

/* ==========================================
   SAVE TO WATCHLIST
   REQUIREMENT: Local storage for persistence
   Adds a movie to the watchlist
   ========================================== */
export function saveToWatchlist(movie) {
    // Get existing watchlist
    const watchlist = getWatchlist();
    
    // Check if movie already in watchlist
    const exists = watchlist.some(m => m.id === movie.id);
    if (exists) {
        console.log(`⚠️ ${movie.title} already in watchlist`);
        return false;
    }
    
    // Add movie to watchlist
    watchlist.push(movie);
    
    // Save to localStorage (convert to JSON string)
    try {
        localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
        console.log(`✅ Added to watchlist: ${movie.title}`);
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
}

/* ==========================================
   GET WATCHLIST
   Returns array of movie objects from localStorage
   ========================================== */
export function getWatchlist() {
    try {
        const data = localStorage.getItem(WATCHLIST_KEY);
        
        // If nothing saved yet, return empty array
        if (!data) {
            return [];
        }
        
        // Parse JSON string back to array
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return [];
    }
}

/* ==========================================
   REMOVE FROM WATCHLIST
   Removes a movie by its ID
   ========================================== */
export function removeFromWatchlist(movieId) {
    const watchlist = getWatchlist();
    
    // Filter out the movie with matching id
    const updated = watchlist.filter(movie => movie.id !== movieId);
    
    try {
        localStorage.setItem(WATCHLIST_KEY, JSON.stringify(updated));
        console.log('✅ Removed from watchlist');
        return true;
    } catch (error) {
        console.error('Error removing from watchlist:', error);
        return false;
    }
}

/* ==========================================
   CHECK IF IN WATCHLIST
   Returns true if movie is already in watchlist
   Useful for toggling button states
   ========================================== */
export function isInWatchlist(movieId) {
    const watchlist = getWatchlist();
    return watchlist.some(movie => movie.id === movieId);
}

/* ==========================================
   CLEAR WATCHLIST
   Removes all movies from watchlist
   ========================================== */
export function clearWatchlist() {
    try {
        localStorage.removeItem(WATCHLIST_KEY);
        console.log('✅ Watchlist cleared');
        return true;
    } catch (error) {
        console.error('Error clearing watchlist:', error);
        return false;
    }
}

/* ==========================================
   UPDATE WATCHLIST COUNT
   Helper function to update the UI counter
   ========================================== */
export function updateWatchlistCount() {
    const watchlist = getWatchlist();
    const counter = document.getElementById('watchlist-count');
    
    if (counter) {
        counter.textContent = watchlist.length;
    }
}

console.log('💾 storage.js module loaded - localStorage active!');
