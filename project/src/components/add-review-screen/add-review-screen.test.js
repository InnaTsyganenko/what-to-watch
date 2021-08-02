import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import AddReviewScreen from './add-review-screen';

const mockStore = configureStore({});
let history;
let store;

describe('Component: AddReviewScreen', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    history = createMemoryHistory();
    store = mockStore({
      USER: {authorizationStatus: ''},
      DATA: {movies: [{backgroundColor: '', name: 'movie'}]},
      MOVIES: {},
    });
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <AddReviewScreen />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/movie/i)).toBeInTheDocument();
  });
});
