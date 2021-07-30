import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
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
import {resetState, resetPickedId} from '../../store/action';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getPromo} from '../../store/movies-data/selectors';
function App(props) {
  const {
    isDataLoaded,
    genre,
    moviesCountForRender,
    pickedId} = props;

  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const promo = useSelector(getPromo);

  const isCheckedAuthUnknown = (authStatus) =>
    authStatus === AuthorizationStatus.UNKNOWN;

  if (isCheckedAuthUnknown(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  browserHistory.listen((location) =>  {
    if (location.pathname === AppRoute.ROOT) {
      dispatch(resetPickedId(promo.id));
    }
    if ((genre !== DEFAULT_GENRE
      || moviesCountForRender !== FILMS_RENDER_STEP)
      && location.pathname !== AppRoute.ROOT) {
      dispatch(resetState());
    }
  });

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <MainScreen />
      </Route>
      <Route exact path={AppRoute.LOGIN} >
        <LoginScreen />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.MY_LIST}
        render={() => <MyListScreen />}
      >
      </PrivateRoute>
      <Route exact path={`${AppRoute.FILM}${pickedId}`} >
        <FilmScreen />
      </Route>
      <PrivateRoute
        exact
        path={`${AppRoute.FILM}${pickedId}${AppRoute.ADD_REVIEW}`}
        render={() => <AddReviewScreen />}
      >
      </PrivateRoute>
      <Route exact path={`${AppRoute.PLAYER}${pickedId}`} >
        <PlayerScreen autoPlay />
      </Route>
      <Route >
        <NotFoundScreen />
      </Route>
    </Switch>
  );
}

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  moviesCountForRender: PropTypes.number.isRequired,
  pickedId: PropTypes.number,
  genre: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA, MOVIES}) => ({
  isDataLoaded: DATA.isDataLoaded,
  genre: MOVIES.genre,
  moviesCountForRender: MOVIES.moviesCountForRender,
  pickedId: MOVIES.pickedId,
});

export {App};
export default connect(mapStateToProps, null)(App);
