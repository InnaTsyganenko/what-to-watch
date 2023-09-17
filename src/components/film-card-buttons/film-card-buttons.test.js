import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AppRoute} from '../../const.js';
import FilmCardButtons from './film-card-buttons';

const mockStore = configureStore({});
let history;
let store;

describe('Component: FilmCardButtons', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(AppRoute.FILM);
    store = mockStore({
      USER: {myList: ''},
      DATA: {movies: [{backgroundColor: '', name: 'movie'}]},
      MOVIES: {},
    });
  });

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FilmCardButtons onPlayButtonClick={jest.fn()} />
        </Router>
      </Provider>,
    );

    expect(container.firstChild).toHaveClass('film-card__buttons');
  });
});
