import {moviesOperations} from './movies-operations';
import {ActionType, getCountMoviesForSlice} from '../action';

describe('Reducer: moviesOperations', () => {
  it('without additional parameters should return initial state', () => {
    expect(moviesOperations(undefined, {}))
      .toEqual({genre: 'All genres', moviesCountForRender: 8});
  });

  it('should increment current movies count by a given value', () => {
    const state = {moviesCountForRender: 8};

    expect(moviesOperations(state, getCountMoviesForSlice()))
      .toEqual({moviesCountForRender: 16});
  });

  it('should get genre to filter movies', () => {
    const state = {genre: 'All genres', moviesCountForRender: 8};
    const getGenreForFilterMovies = {
      type: ActionType.GET_GENRE,
      payload: '',
    };

    expect(moviesOperations(state, getGenreForFilterMovies))
      .toEqual({genre: '', moviesCountForRender: 8});

    const nonGetGenreAction = {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 'All genres',
    };

    expect(moviesOperations(state, nonGetGenreAction))
      .toEqual({genre: 'All genres', moviesCountForRender: 8});
  });

  it('should get current id movie', () => {
    const state = {pickedId: 1};
    const getIdMovie = {
      type: ActionType.GET_ID_MOVIE,
      payload: 1,
    };

    expect(moviesOperations(state, getIdMovie))
      .toEqual({pickedId: 1});

    const nonGetIdAction = {
      type: ActionType.GET_ID_MOVIE,
      payload: null,
    };

    expect(moviesOperations(state, nonGetIdAction))
      .toEqual({pickedId: null});
  });

  it('should have reset state', () => {
    const resetStateAction = {
      type: ActionType.RESET_STATE,
      payload: null,
    };

    expect(moviesOperations({genre: 'Drama', moviesCountForRender: 16}, resetStateAction))
      .toEqual({genre: 'All genres', moviesCountForRender: 8});

    expect(moviesOperations({genre: 'Action', moviesCountForRender: 24}, resetStateAction))
      .toEqual({genre: 'All genres', moviesCountForRender: 8});

    expect(moviesOperations({genre: 'Comedy', moviesCountForRender: 32}, resetStateAction))
      .toEqual({genre: 'All genres', moviesCountForRender: 8});
  });

  it('should have reset id', () => {
    const resetIdAction = {
      type: ActionType.RESET_ID,
      payload: null,
    };

    expect(moviesOperations({pickedId: 10}, resetIdAction))
      .toEqual({pickedId: null});

    expect(moviesOperations({pickedId: 5}, resetIdAction))
      .toEqual({pickedId: null});

    expect(moviesOperations({pickedId: 8}, resetIdAction))
      .toEqual({pickedId: null});
  });
});
