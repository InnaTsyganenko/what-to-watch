import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import UserBlock from './user-block';

const mockStore = configureStore({});
let history;
let store;

describe('Component: UserBlock', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({
      USER: {},
    });
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <UserBlock
            movie={''}
            autoPlay
            src={''}
          />
          <span>UserBlock component</span>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/UserBlock component/i)).toBeInTheDocument();
  });
});
