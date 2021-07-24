import {ActionType} from './action';
import {FILMS_RENDER_STEP, AuthorizationStatus} from '../const';

const initialState = {
  genre: 'All genres',
  promo: {},
  movies: [],
  similarMovies: [],
  moviesCountForRender: FILMS_RENDER_STEP,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promo: action.payload,
      };
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        filtredMovies: state.movies.map((movie) => movie.id),
        isDataLoaded: true,
      };
    case ActionType.LOAD_SIMILAR:
      return {
        ...state,
        similarMovies: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SLICE_LIST_MOVIES:
      return {
        ...state,
        moviesCountForRender: action.payload,
      };
    case ActionType.FILTER_LIST_MOVIES:
      return {
        ...state,
        genre: action.payload,
        filtredMovies: state.movies.filter((movie) => movie.genre === action.payload).map((movie) => movie.id),
      };
    case ActionType.RESET_STATE:
      return {
        ...state,
        genre: initialState.genre,
        movies: state.movies,
        moviesCountForRender: initialState.moviesCountForRender,
        filtredMovies: state.movies.map((movie) => movie.id),
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.GET_ID_MOVIE:
      return {
        ...state,
        pickedId: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
