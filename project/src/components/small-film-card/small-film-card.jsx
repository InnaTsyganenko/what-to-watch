import React from 'react';
import browserHistory from '../../browser-history';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import PreviewPlayer from '../preview-player/preview-player';
import {getIdMovie} from '../../store/action';
import {AppRoute} from '../../const';

function SmallFilmCard(props) {
  const {movie} = props;
  const dispatch = useDispatch();
  const onFilmCardClick = (id) => browserHistory.push(`${AppRoute.FILM}${id}`);

  return (
    <article
      className="small-film-card catalog__films-card"
      onClick={() => {
        dispatch(getIdMovie(movie.id));
        onFilmCardClick(movie.id);
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
  movie: PropTypes.any.isRequired,
};

export default SmallFilmCard;
