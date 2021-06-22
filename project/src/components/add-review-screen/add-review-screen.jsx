import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import {logoClassName} from '../../const';
function AddReviewScreen(props) {
  const {reviews} = props;

  const [state, setState] = useState({
    filmId: reviews[0].id,
    userId: reviews[0].user.id,
    userName: reviews[0].user.name,
    reviewText: 'Review text',
    rating: 0,
    dateReview: reviews[0].date,
  });

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'radio' ? target.defaultValue : target.value;
    const name = target.name;

    setState({
      filmId: reviews[0].id,
      userId: reviews[0].user.id,
      userName: reviews[0].user.name,
      [name]: value,
      dateReview: reviews[0].date,
    });
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo logoClassName={logoClassName.HEADER_LOGO} />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="/films/:id">The Grand Budapest Hotel</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to="/films/:id/review">Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-10" type="radio" name="rating" defaultValue={10}
                defaultChecked={state.rating}
                onClick={(event) => handleInputChange(event)}
              />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>
              <input className="rating__input" id="star-9" type="radio" name="rating" defaultValue={9}
                defaultChecked={state.rating}
                onClick={(event) => handleInputChange(event)}
              />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>
              <input className="rating__input" id="star-8" type="radio" name="rating" defaultValue={8}
                defaultChecked={state.rating}
                onClick={(event) => handleInputChange(event)}
              />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>
              <input className="rating__input" id="star-7" type="radio" name="rating" defaultValue={7}
                defaultChecked={state.rating}
                onClick={(event) => handleInputChange(event)}
              />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>
              <input className="rating__input" id="star-6" type="radio" name="rating" defaultValue={6}
                defaultChecked={state.rating}
                onClick={(event) => handleInputChange(event)}
              />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>
              <input className="rating__input" id="star-5" type="radio" name="rating" defaultValue={5}
                defaultChecked={state.rating}
                onClick={(event) => handleInputChange(event)}
              />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
              <input className="rating__input" id="star-4" type="radio" name="rating" defaultValue={4}
                defaultChecked={state.rating}
                onClick={(event) => handleInputChange(event)}
              />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>
              <input className="rating__input" id="star-3" type="radio" name="rating" defaultValue={3}
                defaultChecked={state.rating}
                onClick={(event) => handleInputChange(event)}
              />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>
              <input className="rating__input" id="star-2" type="radio" name="rating" defaultValue={2}
                defaultChecked={state.rating}
                onClick={(event) => handleInputChange(event)}
              />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>
              <input className="rating__input" id="star-1" type="radio" name="rating" defaultValue={1}
                defaultChecked={state.rating}
                onClick={(event) => handleInputChange(event)}
              />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>
          <div className="add-review__text">
            <textarea className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text" defaultValue={''}
              onChange={(event) => handleInputChange(event)}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

AddReviewScreen.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default AddReviewScreen;
