import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, logout, getMyList, addMovieInMyList, deleteMovieFromMyList} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  myList: [],
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(getMyList, (state) => {
      state.myList = initialState.myList + state.myList;
    })
    .addCase(addMovieInMyList, (state, action) => {
      state.myList = [...state.myList, action.payload];
    })
    .addCase(deleteMovieFromMyList, (state, action) => {
      state.myList = state.myList.filter((el) => el !== action.payload);
    });
});

export {user};
