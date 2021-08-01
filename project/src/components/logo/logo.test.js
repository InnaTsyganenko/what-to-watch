import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Logo from './logo';

const mockStore = configureStore({});
let history;
let store;

describe('Component: Logo', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    history = createMemoryHistory();
    store = mockStore({});
  });

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <Router history={history}>
          <Logo />
          <span>Logo component</span>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Logo component/i)).toBeInTheDocument();
  });
});

