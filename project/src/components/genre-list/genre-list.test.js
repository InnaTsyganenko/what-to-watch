import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import GenreList from './genre-list';

const mockStore = configureStore({});
let history;
let store;

describe('Component: GenreList', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    history = createMemoryHistory();
    store = mockStore({
      USER: {authorizationStatus: ''},
      DATA: {movies: []},
      MOVIES: {pickedId: ''},
    });
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <GenreList />
          <span>GenreList component</span>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/GenreList component/i)).toBeInTheDocument();
  });
});

