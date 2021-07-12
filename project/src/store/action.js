export const ActionType = {
  SLICE_LIST_MOVIES: 'SLICE_LIST_MOVIES',
  FILTER_LIST_MOVIES: 'FILTER_LIST_MOVIES',
  RESET_FILTER: 'RESET_FILTER',
  LOAD_PROMO: 'data/loadPromo',
  LOAD_MOVIES: 'data/loadMovies',
  LOAD_COMMENTS: 'data/loadComments',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
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
  filterListMovies: (genre, movies, originalMovies) => ({
    type: ActionType.FILTER_LIST_MOVIES,
    genre: genre,
    movies: originalMovies.filter((movie) => movie.genre === genre),
  }),
  resetFilters: () => ({
    type: ActionType.RESET_FILTER,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
