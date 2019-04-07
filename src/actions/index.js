import axios from "axios";
import {
  FETCH_SUCCESS,
  FETCH_MOVIE,
  ADD_MOVIE,
  ADD_MOVIES,
  REMOVE_MOVIE,
  CREDIT
} from "./actionTypes";

const API_KEY = process.env.REACT_APP_API_KEY;
const MAIN_URL = "https://api.themoviedb.org/3";

const dispatcher = (
  path,
  type,
  shouldDispatchGenre,
  shouldDispatchSimilar,
  method = "get"
) => {
  return dispatch => {
    axios[method](path)
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type,
            payload: response.data
          });
        }
      })
      .catch();
  };
};

export const credit = id => {
  const api_path = `${MAIN_URL}/movie/${id}/credits?api_key=${API_KEY}`;
  return dispatcher(api_path, CREDIT, false, true);
};

export const fetchPopularMovies = (page = 1) => {
  const api_path = `${MAIN_URL}/movie/now_playing?api_key=${API_KEY}&page=${page}`;
  return dispatcher(api_path, FETCH_SUCCESS, true);
};

export const fetchMovieById = id => {
  const api_path = `${MAIN_URL}/movie/${id}?api_key=${API_KEY}`;
  return dispatcher(api_path, FETCH_MOVIE, false, true);
};

export const addMovie = movie => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};

export const removeMovie = movie => {
  return {
    type: REMOVE_MOVIE,
    payload: movie
  };
};

export const addMovies = movies => {
  return {
    type: ADD_MOVIES,
    movies
  };
};
