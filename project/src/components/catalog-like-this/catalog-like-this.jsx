import React from 'react';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PreviewPlayer from '../preview-player/preview-player';

function CatalogLikeThis(props) {
  const {originalMovies, currentGenre} = props;
  const history = useHistory();
  const handleFilmCardClick = () => history.push(AppRoute.FILM);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {originalMovies.filter((movie) => movie.genre === currentGenre).slice(0, 4).map((movie) => (
          <React.Fragment key={movie.id}>
            <article className="small-film-card catalog__films-card"
              onClick={handleFilmCardClick}
            >
              <PreviewPlayer
                movie={movie}
                autoPlay={false}
                src={movie.previewVideoLink}
              />
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">{movie.name}</a>
              </h3>
            </article>
          </React.Fragment>))}
      </div>
    </section>
  );
}

CatalogLikeThis.propTypes = {
  originalMovies: PropTypes.array.isRequired,
  currentGenre: PropTypes.string,
};

const mapStateToProps = (state) => ({
  originalMovies: state.originalMovies,
});

export default connect(mapStateToProps)(CatalogLikeThis);
