import React from 'react';

import PropTypes from 'prop-types';

function MoviesList(props) {
  const {moviesNames} = props;

  return (
    <div className="catalog__films-list">
      {moviesNames.map((movie, i) => (
        <React.Fragment key={i.toString()}>
          <article className="small-film-card catalog__films-card">
            <div className="small-film-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={movie} width="280" height="175" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">{movie}</a>
            </h3>
          </article>
        </React.Fragment>))}
    </div>
  );
}

MoviesList.propTypes = {
  moviesNames: PropTypes.string.isRequired,
};

export default MoviesList;
