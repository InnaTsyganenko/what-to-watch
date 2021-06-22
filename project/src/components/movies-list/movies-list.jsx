import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';

function MoviesList(props) {
  const {films} = props;
  const [activeFilm, setActiveFilm] = useState(false);
  const history = useHistory();

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <React.Fragment key={film.id}>
          <article className="small-film-card catalog__films-card"
            onMouseOver={() => {
              setActiveFilm({
                ...activeFilm,
                id: film.id,
              });
            }}
            onClick={() => history.push(AppRoute.FILM)}
          >
            <div className="small-film-card__image">
              <img src={film.previewImage} alt={film.name} width="280" height="175" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">{film.name}</a>
            </h3>
          </article>
        </React.Fragment>))}
    </div>
  );
}

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;
