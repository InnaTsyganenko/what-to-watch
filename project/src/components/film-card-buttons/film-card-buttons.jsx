import {React} from 'react';
import {AppRoute} from '../../const';
import {useHistory, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function FIlmCardButtons(props) {
  const {location} = props;
  const history = useHistory();

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button"
        onClick={() => history.push(AppRoute.PLAYER)}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button"
        onClick={() => history.push(AppRoute.MY_LIST)}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
      {(location === '/')
        ? null
        : <Link className="btn film-card__button" to="/films/:id/review">Add review</Link>}
    </div>
  );
}

FIlmCardButtons.propTypes = {
  location: PropTypes.any,
};

export default FIlmCardButtons;
