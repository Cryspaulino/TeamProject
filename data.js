

const OMDB_API_KEY = '7861caab';
const OMDB_BASE_URL = 'https://www.omdbapi.com/';

async function loadMovieData() {
  try {
    const response = await fetch('./movies.json');
    if (!response.ok) {
      throw new Error('Failed to load movies.json');
    }

    return await response.json();
  } catch (error) {
    console.error('Error loading movies.json:', error);
    return null;
  }
}

async function fetchMovieFromOMDb(imdbId) {
  try {
    const response = await fetch(`${OMDB_BASE_URL}?i=${imdbId}&apikey=${OMDB_API_KEY}`);
    if (!response.ok) {
      throw new Error(`OMDb request failed: ${response.status}`);
    }

    const data = await response.json();
    if (data.Response === 'False') {
      throw new Error(data.Error || 'OMDb returned an error');
    }

    return data;
  } catch (error) {
    console.error(`Error fetching OMDb movie ${imdbId}:`, error);
    return null;
  }
}

function convertOMDbMovie(omdbMovie, fallback = {}) {
  return {
    id: fallback.id ?? 0,
    title: omdbMovie.Title || fallback.title || 'Unknown Title',
    year: omdbMovie.Year || fallback.year || 'Unknown Year',
    genre: fallback.genre || 'unknown',
    rating: parseFloat(omdbMovie.imdbRating) || fallback.rating || 0,
    runtime: omdbMovie.Runtime || fallback.runtime || 'Unknown Runtime',
    director: omdbMovie.Director || fallback.director || 'Unknown Director',
    cast: omdbMovie.Actors || fallback.cast || 'Unknown Cast',
    plot: omdbMovie.Plot || fallback.plot || 'No plot available.',
    poster:
      omdbMovie.Poster && omdbMovie.Poster !== 'N/A'
        ? omdbMovie.Poster
        : fallback.poster || 'https://via.placeholder.com/300x450/1a1a2e/eee?text=Movie+Poster',
    rated: omdbMovie.Rated || fallback.rated || 'NR',
    imdbId: omdbMovie.imdbID || fallback.imdbId || ''
  };
}

export async function loadMovies() {
  const data = await loadMovieData();

  if (!data) {
    return [];
  }

  if (data.useApi === false && Array.isArray(data.movies)) {
    return data.movies;
  }

  if (Array.isArray(data.movieIds)) {
    const movies = await Promise.all(
      data.movieIds.map(async (movieInfo) => {
        const omdbMovie = await fetchMovieFromOMDb(movieInfo.imdbId);
        if (!omdbMovie) return null;

        return convertOMDbMovie(omdbMovie, {
          id: movieInfo.id,
          genre: movieInfo.genre,
          imdbId: movieInfo.imdbId
        });
      })
    );

    return movies.filter(Boolean);
  }

  console.error('movies.json format not recognized.');
  return [];
}

export async function getMovieById(id) {
  const movies = await loadMovies();
  return movies.find((movie) => movie.id === Number(id));
}

export function filterMoviesByGenre(movies, genre) {
  if (genre === 'all') {
    return movies;
  }

  return movies.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase());
}

export function getRandomMovie(movies) {
  if (!movies || movies.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
}

export function displayMovie(movie) {
  if (!movie) return;

  document.getElementById("movie-title").textContent = movie.title;
  document.getElementById("movie-image").src = movie.image;
  document.getElementById("movie-description").textContent = movie.description;
}

const button = document.getElementById("random-movie-btn");

await loadMovies();

button.addEventListener("click", () => {
  displayMovie(getRandomMovie());
});