import axios from 'axios';

const API_KEY = 'fa2d81658e7600d0ffe01f5c9f2cea9c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovieTrending = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error('getTrendingFilms error' + error);
  }
};

export const getMovieSearch = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );

    return response.data.results;
  } catch (error) {
    console.error('getMoviesSearch error' + error);
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('getMovieDetails error' + error);
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    if (response.data.cast.length === 0) {
      alert('Oops...There are no casts');
    }
    return response.data.cast;
  } catch (error) {
    console.error('getMovieDetails error' + error);
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    if (response.data.results.length === 0) {
      alert('Oops...There are no reviews');
    }
    return response.data.results;
  } catch (error) {
    console.error('getMovieDetails error' + error);
  }
};
