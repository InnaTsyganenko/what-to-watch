import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CatalogLikeThis from './catalog-like-this';

const mockStore = configureStore({});
let history;
let store;

describe('Component: AddReviewScreen', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      DATA: {similarMovies: []},
      MOVIES: {},
    });
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CatalogLikeThis />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
  });
});
