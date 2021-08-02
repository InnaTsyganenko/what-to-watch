import React from 'react';
import browserHistory from '../../browser-history';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus, getMyList} from '../../store/user/selectors';
import {getPickedId} from '../../store/movies-operations/selectors';
import {addMovieInMyList, deleteMovieFromMyList} from '../../store/action';
function FilmCardButtons(props) {
  const {location} = props;
  const dispatch = useDispatch();

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const pickedId = useSelector(getPickedId);
  const myList = useSelector(getMyList);

  const onPlayButtonClick = () => browserHistory.push(`${AppRoute.PLAYER}${pickedId}`);

  const handleMyListButtonClick = () => {
    if (myList.includes(pickedId)) {
      dispatch(deleteMovieFromMyList(pickedId));
    } else {
      dispatch(addMovieInMyList(pickedId));
    }
  };

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button"
        onClick={onPlayButtonClick}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button"
        onClick={handleMyListButtonClick}
      >
        {(myList.includes(pickedId))
          ?
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
          :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>}
        <span>My list</span>
      </button>
      {(location === '/' || authorizationStatus !== AuthorizationStatus.AUTH)
        ? null
        :
        <Link
          className="btn film-card__button"
          to={`${AppRoute.FILM}${pickedId}${AppRoute.ADD_REVIEW}`}
        >
        Add review
        </Link>}
    </div>
  );
}

FilmCardButtons.propTypes = {
  location: PropTypes.any,
};

export default FilmCardButtons;
