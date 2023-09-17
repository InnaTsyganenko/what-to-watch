import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import Rating from '../rating/rating';
import {LightenDarkenColor} from '../../utils';
import {logoClassName, MIN_LENGTH_COMMENT, MAX_LENGTH_COMMENT} from '../../const';
import {pushComment} from '../../store/api-actions';
import {getPickedId} from '../../store/movies-operations/selectors';
import {getMovies} from '../../store/movies-data/selectors';

function AddReviewScreen() {

  const [state, setState] = useState({
    filmId: '',
    userId: '',
    userName: '',
    comment: 'Review text',
    rating: 0,
    dateReview: '',
  });

  const [commentStatus, setStatus] = useState(false);

  const dispatch = useDispatch();
  const movies = useSelector(getMovies);
  const pickedId = useSelector(getPickedId);

  function handleStatusChange(bool) {
    setStatus(bool);
  }

  function handleTextareaChange(event) {
    if (event.target.value.length >= MIN_LENGTH_COMMENT && event.target.value.length <= MAX_LENGTH_COMMENT) {
      setState({
        ...state,
        comment: event.target.value,
      });
    }
  }

  return (
    <>
      {movies.filter((movie) => movie.id === pickedId).map((movie) => (
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
                  handleStatusChange(true);
                  dispatch(pushComment(pickedId, state.rating, state.comment));
                  handleStatusChange(false);
                }}
              >
                <fieldset
                  style={{border: 'none'}}
                  disabled={commentStatus ? true : null}
                >
                  <div className="rating">
                    <Rating state={state} setState={setState}/>
                  </div>
                  <div className="add-review__text"
                    style={{backgroundColor: LightenDarkenColor(movie.backgroundColor, 45)}}
                  >
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
    </>
  );
}

export default AddReviewScreen;
