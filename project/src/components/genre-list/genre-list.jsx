import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import classnames from 'classnames';
import {DEFAULT_GENRE} from '../../const';

function GenreList(props) {
  const {movies, onFilterClick, resetFilters, activeLi, originalMovies} = props;
  const genreList = originalMovies.map((movie) => movie.genre);

  return (
    <ul className="catalog__genres-list">
      {[DEFAULT_GENRE, ...new Set(genreList)].map((genre) => (
        <React.Fragment key={genre}>
          <li
            className={classnames({'catalog__genres-item':true, 'catalog__genres-item--active': genre === activeLi})}
            onClick={() => {
              genre === 'All genres'
                ? resetFilters()
                : onFilterClick(genre, movies, originalMovies);
            }}
          >
            <Link to="/" className="catalog__genres-link">{genre}</Link>
          </li>
        </React.Fragment>))}
    </ul>
  );
}

GenreList.propTypes = {
  originalMovies: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
  activeLi: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  originalMovies: state.originalMovies,
  activeLi: state.genre,
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  resetFilters() {
    dispatch(ActionCreator.resetFilters());
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
