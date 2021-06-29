import React from 'react';
import PropTypes from 'prop-types';
function FilmPageReviews(props) {
  const {reviews} = props;
  const humanizedDate = { month: 'long', day: 'numeric', year: 'numeric' };

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length/2).map((review) => (
          <React.Fragment key={review.id}>
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={review.date.toISOString()}>{review.date.toLocaleDateString('en-US', humanizedDate)}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{review.rating}</div>
            </div>
          </React.Fragment>))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length/2, reviews.length).map((review) => (
          <React.Fragment key={review.id}>
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={review.date.toISOString()}>{review.date.toLocaleDateString('en-US', humanizedDate)}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{review.rating}</div>
            </div>
          </React.Fragment>))}
      </div>
    </div>
  );
}

FilmPageReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default FilmPageReviews;
