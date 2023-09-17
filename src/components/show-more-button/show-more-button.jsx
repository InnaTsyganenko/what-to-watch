import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCountMoviesForSlice} from '../../store/action';
import {DEFAULT_GENRE} from '../../const';
import {getMoviesCountForRender, getFiltredMovies, getGenre} from '../../store/movies-operations/selectors';
import {getMovies} from '../../store/movies-data/selectors';

function ShowMoreButton() {
  const dispatch = useDispatch();

  const movies = useSelector(getMovies);
  const moviesCountForRender = useSelector(getMoviesCountForRender);
  const genre = useSelector(getGenre);
  const filtredMovies = useSelector(getFiltredMovies);

  return (
    <div className="catalog__more">
      {(genre === DEFAULT_GENRE
        ? movies
        : filtredMovies).length <= moviesCountForRender
        ? null
        :
        <button className="catalog__button" type="button"
          onClick={() => dispatch(getCountMoviesForSlice(moviesCountForRender, (genre === DEFAULT_GENRE
            ? movies
            : filtredMovies).length))}
        >
          Show more
        </button>}
    </div>
  );
}

export default ShowMoreButton;
