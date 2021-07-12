import React from 'react';
import PropTypes from 'prop-types';

function FilmPageDetails(props) {
  const {promo} = props;

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
      <React.Fragment key={promo.id}>
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{promo.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {promo.starring.join('\n')}
            </span>
          </p>
        </div>
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{humanizedRunTime(promo.runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{promo.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{promo.released}</span>
          </p>
        </div>
      </React.Fragment>
    </div>
  );
}

FilmPageDetails.propTypes = {
  promo: PropTypes.object.isRequired,
};

export default FilmPageDetails;
