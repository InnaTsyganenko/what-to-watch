import {createReducer} from '@reduxjs/toolkit';
import {getCountMoviesForSlice, getGenreForFilterMovies, getIdMovie, resetState, resetPickedId} from '../action';
import {FILMS_RENDER_STEP, DEFAULT_GENRE} from '../../const';

const initialState = {
  genre: DEFAULT_GENRE,
  moviesCountForRender: FILMS_RENDER_STEP,
};

const moviesOperations = createReducer(initialState, (builder) => {
  builder
    .addCase(getCountMoviesForSlice, (state) => {
      state.moviesCountForRender = state.moviesCountForRender + FILMS_RENDER_STEP;
    })
    .addCase(getGenreForFilterMovies, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getIdMovie, (state, action) => {
      state.pickedId = action.payload;
    })
    .addCase(resetState, (state) => {
      state.genre = initialState.genre;
      state.moviesCountForRender = initialState.moviesCountForRender;
    })
    .addCase(resetPickedId, (state, action) => {
      state.pickedId = action.payload;
    });
});

export {moviesOperations};
