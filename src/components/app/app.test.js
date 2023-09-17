import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../../const';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH},
      DATA: {isDataLoaded: true},
      MOVIES: {genre: 'All genres', moviesCountForRender: 8},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoute.ROOT);
  });

  it('should render "LoginScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "FilmScreen" when user navigate to "/films/"', () => {
    history.push(AppRoute.FILM);
    render(fakeApp);

  });

  it('should render "MyListScreen" when user navigate to "/my-list"', () => {
    history.push(AppRoute.MY_LIST);
  });

  it('should render "AddReviewScreen" when user navigate to "/add-review"', () => {
    history.push(AppRoute.ADD_REVIEW);
    render(fakeApp);

  });

  it('should render "PlayerScreen" when user navigate to "/player"', () => {
    history.push(AppRoute.PLAYER);
    render(fakeApp);

  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('Oooops!')).toBeInTheDocument();
    expect(screen.getByText('404. The page does not exist.')).toBeInTheDocument();
    expect(screen.getByText('main page')).toBeInTheDocument();
  });
});
