import React from 'react';
import {Link} from 'react-router-dom';
import {filmStates} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function FilmCardTabs(props) {
  const {state, setState, pickedId} = props;

  function toggleActiveItem(activeState) {
    setState({
      activeItem: {
        [activeState]: true,
      },
    });
  }

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {Object.values(filmStates).map((filmState) => (
          <React.Fragment key={filmState}>
            <li
              onClick={() => toggleActiveItem(filmState)}
              className={`film-nav__item
                ${(state.activeItem[filmState]) && ' film-nav__item--active'}`}
            >
              <Link to={`/films/${pickedId}`} className="film-nav__link">{filmState}</Link>
            </li>
          </React.Fragment>))}
      </ul>
    </nav>
  );
}

FilmCardTabs.propTypes = {
  state: PropTypes.any,
  setState: PropTypes.any,
  pickedId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  pickedId: state.pickedId,
});

export default connect(mapStateToProps)(FilmCardTabs);
