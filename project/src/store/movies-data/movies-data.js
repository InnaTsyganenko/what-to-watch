import {createReducer} from '@reduxjs/toolkit';
import {loadPromo, loadMovies, loadSimilarMovies, loadComments} from '../action';

const initialState = {
  promo: {},
  movies: [],
  similarMovies: [],
  comments: [],
  isDataLoaded: false,
};

const moviesData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadMovies, (state, action) => {
      state.isDataLoaded = true;
      state.movies = action.payload;
    })
    .addCase(loadSimilarMovies, (state, action) => {
      state.similarMovies = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    });
});

export {moviesData};
