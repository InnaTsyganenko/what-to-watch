import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import MoviesList from './movies-list';

const mockStore = configureStore({});
let history;
let store;

describe('Component: MoviesList', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    history = createMemoryHistory();
    store = mockStore({
      DATA: {movies: []},
      MOVIES: {pickedId: ''},
    });
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <MoviesList />
          <span>MoviesList component</span>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/MoviesList component/i)).toBeInTheDocument();
  });
});

