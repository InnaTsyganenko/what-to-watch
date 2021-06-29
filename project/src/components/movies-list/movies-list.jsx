import React from 'react';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';
import PreviewPlayer from '../preview-player/preview-player';

function MoviesList(props) {
  const {films} = props;
  const history = useHistory();
  const handleFilmCardClick = () => history.push(AppRoute.FILM);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <React.Fragment key={film.id}>
          <article className="small-film-card catalog__films-card"
            onClick={handleFilmCardClick}
          >
            <PreviewPlayer
              film={film}
              autoPlay={false}
              src={film.previewVideoLink}
            />
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">{film.name}</a>
            </h3>
          </article>
        </React.Fragment>))}
    </div>
  );
}

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;
