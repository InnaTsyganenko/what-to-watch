import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import Rating from './rating';

const mockStore = configureStore({});
let history;
let store;

describe('Component: Rating', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it('should render correctly', () => {
    const state = '';
    render(
      <Provider store={store}>
        <Router history={history}>
          <Rating state={state} />
          <span>Rating component</span>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Rating component/i)).toBeInTheDocument();
  });
});
