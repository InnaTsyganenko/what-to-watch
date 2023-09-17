import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FilmPageDetails from './film-page-details';

const mockStore = configureStore({});
let history;
let store;

describe('Component: FilmPageDetails', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it('should render correctly', () => {
    const movie = {director: 'director', starring: ['starring']};

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FilmPageDetails movie={movie} />
        </Router>
      </Provider>,
    );

    expect(container.firstChild).toHaveClass('film-card__text film-card__row');
  });
});
