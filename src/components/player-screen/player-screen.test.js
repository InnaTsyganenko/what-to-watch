import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import PlayerScreen from './player-screen';

const mockStore = configureStore({});
let history;
let store;

describe('Component: PlayerScreen', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    history = createMemoryHistory();
    store = mockStore({
      USER: {myList: []},
      DATA: {movies: [{runTime: '', id: ''}]},
      MOVIES: {pickedId: ''},
    });
  });

  it('should render correctly', () => {

    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <PlayerScreen
            autoPlay
          />
        </Router>
      </Provider>,
    );

    expect(container.firstChild).toHaveClass('player');
  });
});

