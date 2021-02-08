import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '2db1f8a2f310bfd0cc8fc7e27f1669a2';

export const searchMovies = (query = '', pageNumber = 1) =>
  axios(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${pageNumber}&language=en-US`,
  ).then(res => res.data.results);

export const getTrending = () =>
  axios(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(
    res => res.data.results,
  );

export const getMovieDetales = id =>
  axios(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`).then(
    res => res.data,
  );

export const getMovieCast = id =>
  axios(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  ).then(res => res.data);

export const getMovieReviews = id =>
  axios(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`,
  ).then(res => res.data.results);

export const imgPath = 'https://image.tmdb.org/t/p/w200';
export const posterImgPath = `https://image.tmdb.org/t/p/w300/`;
