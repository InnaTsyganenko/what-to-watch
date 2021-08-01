import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {AppRoute} from '../../const.js';
import FilmCardButtons from './film-card-buttons';

const mockStore = configureStore({});
let history;
let store;

describe('Component: FilmCardButtons', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(AppRoute.FILM);
    store = mockStore({
      USER: {myList: ''},
      DATA: {movies: [{backgroundColor: '', name: 'movie'}]},
      MOVIES: {},
    });
  });

  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <FilmCardButtons onPlayButtonClick={jest.fn()} />
        </Router>
      </Provider>,
    );

    expect(container.firstChild).toHaveClass('film-card__buttons');
  });

  it('when user click "Replay Button" should redirect', () => {
    const playButtonClickHandle = jest.fn();
    playButtonClickHandle.mockImplementation(
      () => history.push(AppRoute.PLAYER),
    );

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.FILM}>
              <FilmCardButtons onPlayButtonClick={playButtonClickHandle}/>
            </Route>
            <Route exact path={AppRoute.PLAYER}><h1>Mock Player Screen</h1></Route>
          </Switch>
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByTestId('button-play'));

    expect(playButtonClickHandle).toBeCalled();
    expect(screen.getByText(/Mock Player Screen/i)).toBeInTheDocument();
  });
});
