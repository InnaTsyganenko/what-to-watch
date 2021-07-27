import React from 'react';
import {useSelector} from 'react-redux';
import {getPickedId} from '../../store/movies-operations/selectors';
import {getSimilarMovies} from '../../store/movies-data/selectors';
import SmallFilmCard from '../small-film-card/small-film-card';

function CatalogLikeThis() {

  const similarMovies = useSelector(getSimilarMovies);
  const pickedId = useSelector(getPickedId);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {similarMovies.filter((movie) => movie.id !== pickedId).slice(0, 4).map((movie) => (
          <React.Fragment key={movie.id}>
            <SmallFilmCard
              movie={movie}
            />
          </React.Fragment>))}
      </div>
    </section>
  );
}

export default CatalogLikeThis;
