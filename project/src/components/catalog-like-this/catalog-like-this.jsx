import React from 'react';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';

function CatalogLikeThis(props) {
  const {movies, currentGenre} = props;
  const history = useHistory();
  const handleFilmCardClick = () => history.push(AppRoute.FILM);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {movies.filter((movie) => movie.genre === currentGenre).map((film) => (
          <React.Fragment key={film.id}>
            <article className="small-film-card catalog__films-card"
              onClick={handleFilmCardClick}
            >
              <div className="small-film-card__image">
                <img src={film.previewImage} alt={film.name} width={280} height={175} />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">{film.name}</a>
              </h3>
            </article>
          </React.Fragment>))}
      </div>
    </section>
  );
}

CatalogLikeThis.propTypes = {
  movies: PropTypes.array.isRequired,
  currentGenre: PropTypes.string.isRequired,
};

export default CatalogLikeThis;
