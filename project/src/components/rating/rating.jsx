import React from 'react';
import {RATINGS} from '../../const';
import PropTypes from 'prop-types';

function Rating(props) {
  const {state, handleInputChange} = props;
  const nameId = 'star-';

  return (
    <div className="rating__stars">
      {RATINGS.map((rating) => (
        <React.Fragment key={rating}>
          <input className="rating__input" id={nameId + rating} type="radio" name="rating" defaultValue={rating}
            defaultChecked={state.rating}
            onClick={(event) => handleInputChange(event)}
          />
          <label className="rating__label" htmlFor={nameId + rating}>Rating {rating}</label>
        </React.Fragment>))}
    </div>
  );
}

Rating.propTypes = {
  state: PropTypes.any,
  handleInputChange: PropTypes.any,
};

export default Rating;
