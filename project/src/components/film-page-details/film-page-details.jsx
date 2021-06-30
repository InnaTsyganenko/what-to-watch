import React from 'react';
import PropTypes from 'prop-types';

function FilmPageDetails(props) {
  const {promoFilm} = props;

  const humanizedRunTime = (duration) => {
    let result = `${duration}m`;
    if (duration < 60) {
      result = `${duration}m`;
    } else if (duration >= 60) {
      const hours = Math.floor(duration / 60).toString();
      const minutes = ((duration % 60)).toString();
      result =  `${hours}h ${minutes}m`;
    }
    return result;
  };

  return (
    <div className="film-card__text film-card__row">
      <React.Fragment key={promoFilm.id}>
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{promoFilm.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {promoFilm.starring.join('\n')}
            </span>
          </p>
        </div>
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{humanizedRunTime(promoFilm.runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{promoFilm.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{promoFilm.released}</span>
          </p>
        </div>
      </React.Fragment>
    </div>
  );
}

FilmPageDetails.propTypes = {
  promoFilm: PropTypes.object.isRequired,
};

export default FilmPageDetails;
