import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FilmPageOverview from './film-page-overview';

const mockStore = configureStore({});
let history;
let store;

describe('Component: FilmPageOverview', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it('should render correctly', () => {
    const movie = {description: '', starring: ['starring']};

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FilmPageOverview movie={movie} />
        </Router>
      </Provider>,
    );

    expect(container.firstChild).toHaveClass('film-rating');
  });
});
