import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {getGenreForFilterMovies, resetState} from '../../store/action';
import classnames from 'classnames';
import {DEFAULT_GENRE} from '../../const';
import {getMovies} from '../../store/movies-data/selectors';
import {getGenre} from '../../store/movies-operations/selectors';

function GenreList() {
  const dispatch = useDispatch();

  const movies = useSelector(getMovies);
  const activeGenre = useSelector(getGenre);
  const genreList = movies.map((movie) => movie.genre);

  return (
    <ul className="catalog__genres-list">
      {[DEFAULT_GENRE, ...new Set(genreList)].slice(0, 10).map((genre) => (
        <React.Fragment key={genre}>
          <li
            className={classnames({'catalog__genres-item':true, 'catalog__genres-item--active': genre === activeGenre})}
            onClick={() => {
              genre === DEFAULT_GENRE
                ? dispatch(resetState())
                : dispatch(getGenreForFilterMovies(genre));
            }}
          >
            <Link to="/" className="catalog__genres-link">{genre}</Link>
          </li>
        </React.Fragment>))}
    </ul>
  );
}

export default GenreList;
