import {ActionType} from './action';
import {FILMS_RENDER_STEP, AuthorizationStatus} from '../const';

const initialState = {
  genre: 'All genres',
  promo: {},
  movies: [],
  moviesCountForRender: FILMS_RENDER_STEP,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promo: action.promo,
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        originalMovies: action.originalMovies,
        movies: action.movies,
        isDataLoaded: true,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SLICE_LIST_MOVIES:
      return {
        ...state,
        moviesCountForRender: action.moviesCountForRender,
        moviesLength: state.movies.length,
      };
    case ActionType.FILTER_LIST_MOVIES:
      return {
        ...state,
        genre: action.genre,
        movies: action.movies,
      };
    case ActionType.RESET_STATE:
      return {
        ...state,
        genre: initialState.genre,
        movies: state.originalMovies,
        moviesCountForRender: initialState.moviesCountForRender,
      };
    case ActionType.LOGIN:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.AUTH,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reducer};
