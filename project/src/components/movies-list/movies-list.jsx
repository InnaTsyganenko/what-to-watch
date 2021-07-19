import React from 'react';
import PropTypes from 'prop-types';
import PreviewPlayer from '../preview-player/preview-player';
import {connect} from 'react-redux';

function MoviesList(props) {
  const {originalMovies, filtredMovies, moviesCountForRender, getIdMovie, handleFilmCardClick} = props;

  return (
    <div className="catalog__films-list">
      {originalMovies.filter(({id}) => filtredMovies.includes(id)).slice(0, moviesCountForRender).map((movie) => (
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
  );
}

MoviesList.propTypes = {
  originalMovies: PropTypes.array.isRequired,
  filtredMovies: PropTypes.array.isRequired,
  moviesCountForRender: PropTypes.number.isRequired,
  getIdMovie: PropTypes.func,
  handleFilmCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filtredMovies: state.filtredMovies,
  originalMovies: state.originalMovies,
  moviesCountForRender: state.moviesCountForRender,
  pickedId: state.pickedId,
});

export default connect(mapStateToProps)(MoviesList);
