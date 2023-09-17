import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import FilmScreen from './film-screen';

const mockStore = configureStore({});
let history;
let store;

describe('Component: FilmScreen', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      USER: {authorizationStatus: ''},
      DATA: {movies: [{name: 'TestName'}]},
      MOVIES: {pickedId: ''},
    });
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <FilmScreen />
          <span>FilmScreen component</span>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/FilmScreen component/i)).toBeInTheDocument();
  });
});
