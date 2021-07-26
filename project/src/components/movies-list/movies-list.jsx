import React from 'react';
import {useSelector} from 'react-redux';
import SmallFilmCard from '../small-film-card/small-film-card';
import {getMovies} from '../../store/movies-data/selectors';
import {getFiltredMovies, getMoviesCountForRender, getGenre} from '../../store/movies-operations/selectors';
import {DEFAULT_GENRE} from '../../const';

function MoviesList() {

  const movies = useSelector(getMovies);
  const genre = useSelector(getGenre);
  const moviesCountForRender = useSelector(getMoviesCountForRender);
  const filtredMovies = useSelector(getFiltredMovies);

  return (
    <div className="catalog__films-list">
      {(genre === DEFAULT_GENRE
        ? movies
        : filtredMovies)
        .slice(0, moviesCountForRender)
        .map((movie) => (
          <React.Fragment key={movie.id}>
            <SmallFilmCard
              movie={movie}
            />
          </React.Fragment>))}
    </div>
  );
}

export default MoviesList;
