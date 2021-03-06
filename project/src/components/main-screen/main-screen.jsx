import React from 'react';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import Logo from '../logo/logo';
import Copyright from '../copyright/copyright';
import UserBlock from '../user-block/user-block';
import GenreList from '../genre-list/genre-list';
import MoviesList from '../movies-list/movies-list';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import ShowMoreButton from '../show-more-button/show-more-button';
import {logoClassName} from '../../const';
import {getPromo} from '../../store/movies-data/selectors';
import {getGenre} from '../../store/movies-operations/selectors';

function MainScreen() {
  const location = useLocation();

  const promo = useSelector(getPromo);
  const genre = useSelector(getGenre);

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.backgroundImage} alt={promo.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo logoClassName={logoClassName.HEADER_LOGO} />
          <UserBlock />
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo.posterImage} alt={promo.name} width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>
              <FilmCardButtons
                location={location.pathname}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <MoviesList
            genre={genre}
          />
          <ShowMoreButton />
        </section>
        <footer className="page-footer">
          <Logo logoClassName={logoClassName.FOOTER_LOGO} />
          <Copyright />
        </footer>
      </div>
    </React.Fragment>
  );
}
export default MainScreen;
