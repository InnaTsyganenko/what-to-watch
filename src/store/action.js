import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  GET_COUNT_MOVIES_FOR_SLICE: 'getCountMoviesForSlice',
  GET_GENRE: 'getGenreForFilterMovies',
  RESET_STATE: 'resetState',
  LOAD_PROMO: 'data/loadPromo',
  LOAD_MOVIES: 'data/loadMovies',
  LOAD_SIMILAR: 'data/loadSimilarMovies',
  LOAD_COMMENTS: 'data/loadComments',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
  GET_ID_MOVIE: 'getIdMovie',
  HANDLE_ERRORS: 'handleErrors',
  RESET_ID: 'resetPickedId',
  GET_MY_LIST: 'getMyList',
  ADD_MOVIE_IN_MY_LIST: 'addMovieInMyList',
  DELETE_MOVIE_FROM_MY_LIST: 'deleteMovieFromMyList',
};

export const loadPromo = createAction(ActionType.LOAD_PROMO, (promo) => ({
  payload: promo,
}));

export const loadMovies = createAction(ActionType.LOAD_MOVIES, (movies) => ({
  payload: movies,
}));

export const getCountMoviesForSlice = createAction(ActionType.GET_COUNT_MOVIES_FOR_SLICE, (moviesCountForRender) => ({
  payload: moviesCountForRender,
}));

export const getGenreForFilterMovies = createAction(ActionType.GET_GENRE, (genre) => ({
  payload: genre,
}));

export const getIdMovie = createAction(ActionType.GET_ID_MOVIE, (pickedId) => ({
  payload: pickedId,
}));

export const loadSimilarMovies = createAction(ActionType.LOAD_SIMILAR, (similarMovies) => ({
  payload: similarMovies,
}));

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));

export const resetState = createAction(ActionType.RESET_STATE);

export const resetPickedId = createAction(ActionType.RESET_ID, (id) => ({
  payload: id,
}));

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const getMyList = createAction(ActionType.GET_MY_LIST);

export const addMovieInMyList = createAction(ActionType.ADD_MOVIE_IN_MY_LIST, (newMovie) => ({
  payload: newMovie,
}));

export const deleteMovieFromMyList = createAction(ActionType.DELETE_MOVIE_FROM_MY_LIST, (movie) => ({
  payload: movie,
}));

export const logout = createAction(ActionType.LOGOUT);
