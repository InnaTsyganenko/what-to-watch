import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {AppRoute, AuthorizationStatus, FILMS_RENDER_STEP, DEFAULT_GENRE} from '../../const';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import FilmScreen from '../film-screen/film-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import browserHistory from '../../browser-history';
import {ActionCreator} from '../../store/action';
function App(props) {
  const {
    authorizationStatus,
    isDataLoaded,
    resetState,
    genre,
    moviesCountForRender,
    getIdMovie,
    pickedId} = props;

  const isCheckedAuth = (authStatus) =>
    authStatus === AuthorizationStatus.UNKNOWN;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  browserHistory.listen((location) =>  {
    if ((genre !== DEFAULT_GENRE
      || moviesCountForRender !== FILMS_RENDER_STEP)
      && location.pathname !== AppRoute.ROOT) {
      resetState();
    }
  });

  const handleFilmCardClick = (id) => browserHistory.push(`${AppRoute.FILM}${id}`);

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
            getIdMovie={getIdMovie}
            handleFilmCardClick={handleFilmCardClick}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => <MyListScreen />}
        >
        </PrivateRoute>
        <Route path={`${AppRoute.FILM}${pickedId}`}>
          <FilmScreen
            getIdMovie={getIdMovie}
            handleFilmCardClick={handleFilmCardClick}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.ADD_REVIEW}
          render={() => <AddReviewScreen />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  resetState: PropTypes.func.isRequired,
  moviesCountForRender: PropTypes.number.isRequired,
  pickedId: PropTypes.number,
  genre: PropTypes.string.isRequired,
  getIdMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
  genre: state.genre,
  moviesCountForRender: state.moviesCountForRender,
  pickedId: state.pickedId,
});

const mapDispatchToProps = (dispatch) => ({
  resetState() {
    dispatch(ActionCreator.resetState());
  },
  getIdMovie(pickedId) {
    dispatch(ActionCreator.getIdMovie(pickedId));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
