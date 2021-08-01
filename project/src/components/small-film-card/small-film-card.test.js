import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import SmallFilmCard from './small-film-card';
import {AppRoute} from '../../const.js';

const mockStore = configureStore({});
let history;
let store;

describe('Component: SmallFilmCard', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    store = mockStore({});
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <SmallFilmCard
            movie={''}
            autoPlay
            src={''}
          />
          <span>SmallFilmCard component</span>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/SmallFilmCard component/i)).toBeInTheDocument();
  });

  it('when user click film card should redirect', () => {
    const onFilmCardClick = jest.fn();
    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route>
              <SmallFilmCard
                movie={''}
                autoPlay
                src={''}
              />
              <span>SmallFilmCard component</span>
            </Route>
            <Route exact path={AppRoute.FILM}><h1>Mock Film Screen</h1></Route>
          </Switch>
        </Router>
      </Provider>,
    );

    const wrapper = screen.getByTestId('article-film-card');

    userEvent.click(wrapper);
    expect(onFilmCardClick).toBeCalled();
    expect(screen.getByText(/Mock Film Screen/i)).toBeInTheDocument();
  });
});
