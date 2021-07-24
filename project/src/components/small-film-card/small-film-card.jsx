import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import PreviewPlayer from '../preview-player/preview-player';
import {getIdMovie} from '../../store/action';

function SmallFilmCard(props) {
  const {movie, handleFilmCardClick} = props;
  const dispatch = useDispatch();

  return (
    <article className="small-film-card catalog__films-card"
      onClick={() => {
        dispatch(getIdMovie(movie.id));
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
  handleFilmCardClick: PropTypes.func.isRequired,
};

export default SmallFilmCard;
