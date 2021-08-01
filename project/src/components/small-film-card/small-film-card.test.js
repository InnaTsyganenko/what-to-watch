import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import SmallFilmCard from './small-film-card';

const mockStore = configureStore({});
let history;
let store;

describe('Component: SmallFilmCard', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    history = createMemoryHistory();
    store = mockStore({});
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <SmallFilmCard
            movie={[]}
            autoPlay
            src={''}
          />
          <span>SmallFilmCard component</span>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/SmallFilmCard component/i)).toBeInTheDocument();
  });
});
