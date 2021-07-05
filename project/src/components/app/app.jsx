import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import FilmScreen from '../film-screen/film-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import filmsProp from '../film-screen/films.prop';
import reviewsProp from '../film-screen/reviews.prop';

function App(props) {
  const {promoFilm, movies, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
            promoFilm={promoFilm}
            movies={movies}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyListScreen
            movies={movies}
          />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmScreen
            promoFilm={promoFilm}
            movies={movies}
            reviews={reviews}
          />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReviewScreen
            reviews={reviews}
          />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerScreen
            promoFilm={promoFilm}
            movies={movies}
          />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(filmsProp).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewsProp)).isRequired,
};

export default App;
