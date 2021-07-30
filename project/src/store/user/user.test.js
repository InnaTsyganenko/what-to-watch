import {user} from './user';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({authorizationStatus: AuthorizationStatus.UNKNOWN, myList: []});
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
  });

  it('should add id in my list', () => {
    let state = {myList: []};
    const addMovieInMyList = {
      type: ActionType.ADD_MOVIE_IN_MY_LIST,
      payload: 9,
    };

    user(state, addMovieInMyList);
    state = {myList: [9]};
    addMovieInMyList.payload = 14;
    expect(user(state, addMovieInMyList))
      .toEqual({myList: [9, 14]});
  });

  it('should delete id from my list', () => {
    let state = {myList: [5, 7, 9]};
    const deleteMovieFromMyList = {
      type: ActionType.DELETE_MOVIE_FROM_MY_LIST,
      payload: 9,
    };

    user(state, deleteMovieFromMyList);
    state = {myList: [5, 7]};
    deleteMovieFromMyList.payload = 5;
    expect(user(state, deleteMovieFromMyList))
      .toEqual({myList: [7]});
  });

});
