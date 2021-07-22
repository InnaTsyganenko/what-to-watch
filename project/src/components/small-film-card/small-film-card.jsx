import React from 'react';
import PropTypes from 'prop-types';
import PreviewPlayer from '../preview-player/preview-player';

function SmallFilmCard(props) {
  const {movie, getIdMovie, handleFilmCardClick} = props;

  return (
    <article className="small-film-card catalog__films-card"
      onClick={() => {
        getIdMovie(movie.id);
        handleFilmCardClick(movie.id);
      }}
    >
      <PreviewPlayer
        movie={movie}
        autoPlay={false}
        src={movie.previewVideoLink}
      />
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{movie.name}</a>
      </h3>
    </article>
  );
}

SmallFilmCard.propTypes = {
  movie: PropTypes.object.isRequired,
  getIdMovie: PropTypes.func,
  handleFilmCardClick: PropTypes.func.isRequired,
};

export default SmallFilmCard;
