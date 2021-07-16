export const ActionType = {
  SLICE_LIST_MOVIES: 'sliceListMovies',
  FILTER_LIST_MOVIES: 'filterListMovies',
  RESET_STATE: 'resetState',
  LOAD_PROMO: 'data/loadPromo',
  LOAD_MOVIES: 'data/loadMovies',
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
    movies: movies,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    comments: comments,
  }),
  sliceListMovies: (moviesCountForRender, moviesLength) => ({
    type: ActionType.SLICE_LIST_MOVIES,
    moviesCountForRender: moviesCountForRender,
    moviesLength: moviesLength,
  }),
  filterListMovies: (genre, originalMovies) => ({
    type: ActionType.FILTER_LIST_MOVIES,
    genre: genre,
    movies: originalMovies.filter((movie) => movie.genre === genre),
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
