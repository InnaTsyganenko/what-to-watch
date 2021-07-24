import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SLICE_LIST_MOVIES: 'sliceListMovies',
  FILTER_LIST_MOVIES: 'filterListMovies',
  RESET_STATE: 'resetState',
  LOAD_PROMO: 'data/loadPromo',
  LOAD_MOVIES: 'data/loadMovies',
  LOAD_SIMILAR: 'data/loadSimilarMovies',
  LOAD_COMMENTS: 'data/loadComments',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'redirectToRoute',
  GET_ID_MOVIE: 'getIdMovie',
  HANDLE_ERRORS: 'handleErrors',
};

export const loadPromo = createAction(ActionType.LOAD_PROMO, (promo) => ({
  payload: promo,
}));

export const loadMovies = createAction(ActionType.LOAD_MOVIES, (movies) => ({
  payload: movies,
}));

export const sliceListMovies = createAction(ActionType.SLICE_LIST_MOVIES, (moviesCountForRender) => ({
  payload: moviesCountForRender,
}));

export const filterListMovies = createAction(ActionType.FILTER_LIST_MOVIES, (genre) => ({
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

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));


export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const logout = createAction(ActionType.LOGOUT);
