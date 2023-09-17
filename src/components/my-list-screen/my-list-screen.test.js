import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import MyListScreen from './my-list-screen';

const mockStore = configureStore({});
let history;
let store;

describe('Component: MyListScreen', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    history = createMemoryHistory();
    store = mockStore({
      USER: {myList: []},
      DATA: {movies: []},
    });
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <MyListScreen />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });
});

