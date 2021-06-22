import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FIlmCardButtons from '../film-card-buttons/film-card-buttons';
import {logoClassName, filmState} from '../../const';
import Copyright from '../copyright/copyright';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';
import PropTypes from 'prop-types';

function FilmScreen(props) {
  const {promoFilm} = props;
  const [state, setState] = useState({ state: filmState.OVERVIEW, activeItem: {} });

  function toggleActiveItem(activeState) {
    setState({ activeItem: { [activeState]: true } });
  }

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo logoClassName={logoClassName.HEADER_LOGO} />
            <UserBlock />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>
              <FIlmCardButtons />
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width={218} height={327} />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li onClick={() => toggleActiveItem(filmState.OVERVIEW)}
                    className={(state.state === 'OVERVIEW' || state.activeItem[filmState.OVERVIEW]) ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                  >
                    <Link to="/films/:id" className="film-nav__link"
                      onClick={() => {}}
                    >Overview
                    </Link>
                  </li>
                  <li onClick={() => toggleActiveItem(filmState.DETAILS)}
                    className={(state.activeItem[filmState.DETAILS]) ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                  >
                    <Link to="#" className="film-nav__link"
                      onClick={() => {}}
                    >Details
                    </Link>
                  </li>
                  <li onClick={() => toggleActiveItem(filmState.REVIEWS)}
                    className={(state.activeItem[filmState.REVIEWS]) ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                  >
                    <Link to="#" className="film-nav__link"
                      onClick={() => {}}
                    >Reviews
                    </Link>
                  </li>
                </ul>
              </nav>
              {(state.state === 'OVERVIEW' || state.activeItem[filmState.OVERVIEW]) ? <FilmPageOverview /> : null}
              {(state.activeItem[filmState.DETAILS]) ? <FilmPageDetails /> : null}
              {(state.activeItem[filmState.REVIEWS]) ? <FilmPageReviews /> : null}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175} />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width={280} height={175} />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width={280} height={175} />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Macbeth</a>
              </h3>
            </article>
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width={280} height={175} />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Aviator</a>
              </h3>
            </article>
          </div>
        </section>
        <footer className="page-footer">
          <Logo logoClassName={logoClassName.FOOTER_LOGO} />
          <Copyright />
        </footer>
      </div>
    </div>
  );
}

FilmScreen.propTypes = {
  promoFilm: PropTypes.object.isRequired,
};

export default FilmScreen;
