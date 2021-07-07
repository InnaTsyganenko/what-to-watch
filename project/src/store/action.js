export const ActionType = {
  SLICE_LIST_MOVIES: 'SLICE_LIST_MOVIES',
  CHANGE_GENRE: 'CHANGE_GENRE',
  GET_LIST_MOVIES: 'GET_LIST_MOVIES',
  RESET_STATE: 'RESET_STATE',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    genre: genre,
  }),
  sliceListMovies: (moviesCountForRender, moviesLength) => ({
    type: ActionType.SLICE_LIST_MOVIES,
    moviesCountForRender: moviesCountForRender,
    moviesLength: moviesLength,
  }),
  getListMovies: (genre, movies) => ({
    type: ActionType.GET_LIST_MOVIES,
    movies: movies.filter((movie) => movie.genre === genre),
  }),
  resetFilters: () => ({
    type: ActionType.RESET_STATE,
  }),
};
