import {ActionType} from './action';
import films from '../mocks/films';
import {FILMS_RENDER_STEP} from '../const';

const initialState = {
  genre: 'All genres',
  movies: films,
  moviesCountForRender: FILMS_RENDER_STEP,
  moviesLength: films.length,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SLICE_LIST_MOVIES:
      return {
        ...state,
        moviesCountForRender: action.moviesCountForRender,
        moviesLength: action.moviesLength,
      };
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.genre,
      };
    case ActionType.GET_LIST_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };
    case ActionType.RESET_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};


export {reducer};
