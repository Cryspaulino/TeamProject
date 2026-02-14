
// movie.js


/* ==========================================
   MOVIE.JS - Movie Detail Page Script
   
   URL parameters
   
   This script handles the movie detail page (movie.html)
   It receives data through URL parameters, for example:
   - movie.html?id=5  (shows movie with id 5)
   - movie.html?id=12 (shows movie with id 12)
   
   Stop...weirdness happening...
   
   ========================================== */

console.log('✅ movie.js loaded successfully!');
console.log('📄 Movie detail page initialized');

/* ==========================================
   FUTURE IMPLEMENTATION 
   
   
   ========================================== */

/* ==========================================
   URL PARAMETER PARSING
   
   When the URL is: movie.html?id=5&genre=sci-fi
   
   const params = new URLSearchParams(window.location.search);
   const id = params.get('id');        // Returns "5"
   const genre = params.get('genre');  // Returns "sci-fi"
   
   This is how we'll know which movie to display!
   ========================================== */
