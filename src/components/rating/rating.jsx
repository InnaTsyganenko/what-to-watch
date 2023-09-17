import React from 'react';
import {RATINGS} from '../../const';
import PropTypes from 'prop-types';

function Rating(props) {
  const {state, setState} = props;
  const nameId = 'star-';

  function handleInputClick(event) {
    setState({
      ...state,
      rating: event.target.defaultValue,
    });
  }

  return (
    <div className="rating__stars">
      {RATINGS.map((rating) => (
        <React.Fragment key={rating}>
          <input className="rating__input" id={nameId + rating} type="radio" name="rating" defaultValue={rating}
            defaultChecked={state.rating}
            onClick={(event) => handleInputClick(event)}
          />
          <label className="rating__label" htmlFor={nameId + rating}>Rating {rating}</label>
        </React.Fragment>))}
    </div>
  );
}

Rating.propTypes = {
  state: PropTypes.any,
  setState: PropTypes.any,
};

export default Rating;
