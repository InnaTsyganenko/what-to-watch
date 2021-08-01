import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import MainScreen from './main-screen';

const mockStore = configureStore({});
let history;
let store;

describe('Component: MainScreen', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      USER: {authorizationStatus: '', myList: []},
      DATA: {promo: {name: 'promo'}, movies: []},
      MOVIES: {genre: ''},
    });
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <MainScreen />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/promo/i)).toBeInTheDocument();
  });
});
