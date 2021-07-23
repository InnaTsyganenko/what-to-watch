import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filterListMovies, resetState} from '../../store/action';
import classnames from 'classnames';
import {DEFAULT_GENRE} from '../../const';

function GenreList(props) {
  const {activeLi, movies} = props;
  const dispatch = useDispatch();
  const genreList = movies.map((movie) => movie.genre);

  return (
    <ul className="catalog__genres-list">
      {[DEFAULT_GENRE, ...new Set(genreList)].slice(0, 10).map((genre) => (
        <React.Fragment key={genre}>
          <li
            className={classnames({'catalog__genres-item':true, 'catalog__genres-item--active': genre === activeLi})}
            onClick={() => {
              genre === DEFAULT_GENRE
                ? dispatch(resetState())
                : dispatch(filterListMovies(genre, movies));
            }}
          >
            <Link to="/" className="catalog__genres-link">{genre}</Link>
          </li>
        </React.Fragment>))}
    </ul>
  );
}

GenreList.propTypes = {
  movies: PropTypes.array.isRequired,
  activeLi: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  activeLi: state.genre,
});

export {GenreList};
export default connect(mapStateToProps, null)(GenreList);
