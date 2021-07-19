import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PreviewPlayer from '../preview-player/preview-player';

function CatalogLikeThis(props) {
  const {similarMovies, getIdMovie, handleFilmCardClick, pickedId} = props;

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {similarMovies.filter((movie) => movie.id !== pickedId).slice(0, 4).map((movie) => (
          <React.Fragment key={movie.id}>
            <article className="small-film-card catalog__films-card"
              onClick={() => {
                getIdMovie(movie.id);
                handleFilmCardClick(movie.id);
              }}
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
  similarMovies: PropTypes.array,
  getIdMovie: PropTypes.func.isRequired,
  handleFilmCardClick: PropTypes.func.isRequired,
  pickedId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  similarMovies: state.similarMovies,
  pickedId: state.pickedId,
});

export default connect(mapStateToProps)(CatalogLikeThis);
