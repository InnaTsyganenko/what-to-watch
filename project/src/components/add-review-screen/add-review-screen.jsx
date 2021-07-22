import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Rating from '../rating/rating';
import {logoClassName, MIN_LENGTH_COMMENT, MAX_LENGTH_COMMENT} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {pushComment} from '../../store/api-actions';
function AddReviewScreen(props) {
  const {pickedId, originalMovies, sendComment} = props;

  const [state, setState] = useState({
    filmId: '',
    userId: '',
    userName: '',
    comment: 'Review text',
    rating: 0,
    dateReview: '',
  });

  const [commentStatus, setStatus] = useState(false);

  function handleStatusChange() {
    setStatus(true);
  }

  function handleTextareaChange(event) {
    if (event.target.value.length >= MIN_LENGTH_COMMENT && event.target.value.length <= MAX_LENGTH_COMMENT) {
      setState({
        ...state,
        comment: event.target.value,
      });
    }
  }

  function LightenDarkenColor(color, amount) {
    return (`#${color.replace(/^#/, '').replace(/../g, (col) =>
      (`0${Math.min(255, Math.max(0, parseInt(col, 16) + amount)).toString(16)}`).substr(-2))}`);
  }

  return (
    <div>
      {originalMovies.filter((movie) => movie.id === pickedId).map((movie) => (
        <React.Fragment key={movie.id}>
          <section className="film-card film-card--full" style={{backgroundColor: movie.backgroundColor}}>
            <div className="film-card__header">
              <div className="film-card__bg">
                <img src={movie.backgroundImage} alt={movie.name} />
              </div>
              <h1 className="visually-hidden">WTW</h1>
              <header className="page-header">
                <Logo logoClassName={logoClassName.HEADER_LOGO} />
                <nav className="breadcrumbs">
                  <ul className="breadcrumbs__list">
                    <li className="breadcrumbs__item">
                      <Link className="breadcrumbs__link" to={`/films/${pickedId}`}>{movie.name}</Link>
                    </li>
                    <li className="breadcrumbs__item">
                      <Link className="breadcrumbs__link" to={`/films/${pickedId}/review`}>Add review</Link>
                    </li>
                  </ul>
                </nav>
                <UserBlock />
              </header>
              <div className="film-card__poster film-card__poster--small">
                <img src={movie.posterImage} alt={movie.name} width={218} height={327} />
              </div>
            </div>
            <div className="add-review">
              <form
                action="#"
                className="add-review__form"
                onSubmit={(evt) => {
                  evt.preventDefault();
                  handleStatusChange();
                  sendComment(pickedId, state.rating, state.comment);
                }}
              >
                <fieldset
                  style={{border: 'none'}}
                  disabled={commentStatus ? true : null}
                >
                  <div className="rating">
                    <Rating  state={state} setState={setState}/>
                  </div>
                  <div className="add-review__text" style={{backgroundColor: LightenDarkenColor(movie.backgroundColor, 25)}}>
                    <textarea
                      className="add-review__textarea"
                      name="comment" id="review-text"
                      placeholder="Review text"
                      defaultValue={''}
                      maxLength={MAX_LENGTH_COMMENT}
                      onChange={(event) => handleTextareaChange(event)}
                    />
                    <div className="add-review__submit">
                      <button
                        className="add-review__btn"
                        type="submit"
                        disabled={(state.comment.length <= MIN_LENGTH_COMMENT)
                          || (state.comment.length >= MAX_LENGTH_COMMENT)
                          || (state.rating === 0) ? true : null}
                      >Post
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </section>
        </React.Fragment>))}
    </div>
  );
}

AddReviewScreen.propTypes = {
  pickedId: PropTypes.number.isRequired,
  originalMovies: PropTypes.array.isRequired,
  sendComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pickedId: state.pickedId,
  authorizationStatus: state.authorizationStatus,
  originalMovies: state.originalMovies,
});

const mapDispatchToProps = (dispatch) => ({
  sendComment(id, rating, commentText) {
    dispatch(pushComment(id, rating, commentText));
  },
});

export {AddReviewScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewScreen);
