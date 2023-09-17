import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FilmPageReviews from './film-page-reviews';

const mockStore = configureStore({});
let history;
let store;

describe('Component: FilmPageReviews', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      DATA: {comments: []},
    });
  });

  it('should render correctly', () => {

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FilmPageReviews />
        </Router>
      </Provider>,
    );

    expect(container.firstChild).toHaveClass('film-card__reviews film-card__row');
  });
});
