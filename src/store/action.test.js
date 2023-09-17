import {
  getCountMoviesForSlice,
  getGenreForFilterMovies,
  getIdMovie,
  getMyList,
  addMovieInMyList,
  deleteMovieFromMyList,
  resetState,
  resetPickedId,
  ActionType
} from './action';


describe('Actions', () => {
  it('action creator for slice list movies returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_COUNT_MOVIES_FOR_SLICE,
      payload: 8,
    };

    const moviesCountForRender = 8;

    expect(getCountMoviesForSlice(moviesCountForRender)).toEqual(expectedAction);
  });

  it('action creator for filter list movies returns action with correct genre', () => {
    const expectedAction = {
      type: ActionType.GET_GENRE,
      payload: 'Drama',
    };

    const genre = 'Drama';

    expect(getGenreForFilterMovies(genre)).toEqual(expectedAction);
  });

  it('action creator for get id movie returns action with correct id', () => {
    const expectedAction = {
      type: ActionType.GET_ID_MOVIE,
      payload: 10,
    };

    expect(getIdMovie(10)).toEqual(expectedAction);
  });

  it('action creator for get my list returns action with correct my list', () => {
    const expectedAction = {
      type: ActionType.GET_MY_LIST,
      payload: [],
    };

    expect(getMyList([])).toEqual(expectedAction);
  });

  it('action creator for add movie in my list returns action with add movie id', () => {
    const expectedAction = {
      type: ActionType.ADD_MOVIE_IN_MY_LIST,
      payload: 9,
    };

    expect(addMovieInMyList(9)).toEqual(expectedAction);
  });

  it('action creator for delete movie from my list returns action with delete movie id', () => {
    const expectedAction = {
      type: ActionType.DELETE_MOVIE_FROM_MY_LIST,
      payload: null,
    };

    expect(deleteMovieFromMyList(null)).toEqual(expectedAction);
  });

  it('action creator for reset id returns action with promo id payload', () => {
    const expectedAction = {
      type: ActionType.RESET_ID,
      payload: 5,
    };

    expect(resetPickedId(5)).toEqual(expectedAction);
  });

  it('action creator for reset state returns action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.RESET_STATE,
    };

    expect(resetState()).toEqual(expectedAction);
  });
});
