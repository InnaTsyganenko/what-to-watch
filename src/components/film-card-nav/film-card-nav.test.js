import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FilmCardNav from './film-card-nav';

const mockStore = configureStore({});
let history;
let store;

describe('Component: FilmCardNav', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      USER: {myList: ''},
      DATA: {movies: [{backgroundColor: '', name: 'movie'}]},
      MOVIES: {},
    });
  });

  it('should render correctly', () => {
    const state = {activeItem: {activeItem: {'Overview': true}}};

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FilmCardNav state={state} />
        </Router>
      </Provider>,
    );

    expect(container.firstChild).toHaveClass('film-nav film-card__nav');
  });
});
