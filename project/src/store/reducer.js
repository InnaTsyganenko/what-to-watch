import {ActionType} from './action';
import films from '../mocks/films';

const initialState = {
  genre: 'All genres',
  movies: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
