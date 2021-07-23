import React from 'react';
import PropTypes from 'prop-types';

function FilmPageOverview(props) {
  const {movie} = props;
  const separateText = movie.description.split('.');

  const getDescriptionRating = (rating) => {
    let result;
    if (rating === 10) {
      result='Awesome';
    } else if (rating >= 8) {
      result='Very good';}
    else if (rating >= 5) {
      result='Good';}
    else if (rating >= 3) {
      result='Normal';}
    else if (rating < 3) {
      result='Bad';
    }
    return result;
  };

  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{movie.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getDescriptionRating(movie.rating)}</span>
          <span className="film-rating__count">{movie.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{separateText.slice(0, 3).join('. ')}{separateText.length > 3 ? '.' : false}</p>
        <p>{separateText.slice(4, separateText.length).join('. ')}</p>
        <p className="film-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {movie.starring.join(', ')} and other</strong></p>
      </div>
    </React.Fragment>
  );
}

FilmPageOverview.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default FilmPageOverview;
