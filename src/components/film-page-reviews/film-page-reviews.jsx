import React from 'react';
import {useSelector} from 'react-redux';
import {getComments} from '../../store/movies-data/selectors';

function FilmPageReviews() {

  const comments = useSelector(getComments);
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

export default FilmPageReviews;
