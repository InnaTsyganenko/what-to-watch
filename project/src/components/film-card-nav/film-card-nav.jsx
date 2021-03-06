import React from 'react';
import {useSelector} from 'react-redux';
import {getPickedId} from '../../store/movies-operations/selectors';
import {Link} from 'react-router-dom';
import {filmStates} from '../../const';
import PropTypes from 'prop-types';

function FilmCardNav(props) {
  const {state, setState} = props;

  const pickedId = useSelector(getPickedId);

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

FilmCardNav.propTypes = {
  state: PropTypes.any,
  setState: PropTypes.any,
};

export default FilmCardNav;
