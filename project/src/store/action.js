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
};

export const ActionCreator = {
  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    promo: promo,
  }),
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    originalMovies: movies,
    filtredMovies: movies.map((movie) => movie.id),
  }),
  loadSimilarMovies: (similarMovies) => ({
    type: ActionType.LOAD_SIMILAR,
    similarMovies: similarMovies,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    comments: comments,
  }),
  sliceListMovies: (moviesCountForRender) => ({
    type: ActionType.SLICE_LIST_MOVIES,
    moviesCountForRender: moviesCountForRender,
  }),
  filterListMovies: (genre, originalMovies) => ({
    type: ActionType.FILTER_LIST_MOVIES,
    genre: genre,
    filtredMovies: originalMovies.filter((movie) => movie.genre === genre).map((movie) => movie.id),
  }),
  resetState: () => ({
    type: ActionType.RESET_STATE,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  login: () => ({
    type: ActionType.LOGIN,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  getIdMovie: (pickedId) => ({
    type: ActionType.GET_ID_MOVIE,
    pickedId: pickedId,
  }),
};
