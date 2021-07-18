import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
function FilmPageReviews(props) {
  const {comments} = props;
  const humanizedDate = { month: 'long', day: 'numeric', year: 'numeric' };

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.slice(comments.length/2, comments.length).map((comment) => (
          <React.Fragment key={comment.id}>
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime={comment.date}>{new Date(comment.date).toLocaleDateString('en-US', humanizedDate)}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{comment.rating}</div>
            </div>
          </React.Fragment>))}
      </div>
      <div className="film-card__reviews-col">
        {comments.slice(0, comments.length/2).map((comment) => (
          <React.Fragment key={comment.id}>
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime={comment.date}>{new Date(comment.date).toLocaleDateString('en-US', humanizedDate)}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{comment.rating}</div>
            </div>
          </React.Fragment>))}
      </div>
    </div>
  );
}

FilmPageReviews.propTypes = {
  comments: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(FilmPageReviews);
