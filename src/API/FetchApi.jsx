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
    alert('Something went wrong.Try again!');
    console.log(error);
  }
};

export const getMovieSearch = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    if (response.data.results.length === 0) {
      alert('There are no such movies');
    }
    return response.data.results;
  } catch (error) {
    alert('Something went wrong.Try again!');
    console.log(error);
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    alert('Something went wrong.Try again!');
    console.log(error);
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data.cast;
  } catch (error) {
    alert('Something went wrong.Try again!');
    console.log(error);
  }
};

export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    alert('Something went wrong.Try again!');
    console.log(error);
  }
};
