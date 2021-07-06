import React from 'react';
import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';
import PreviewPlayer from '../preview-player/preview-player';
import {connect} from 'react-redux';

function MoviesList(props) {
  const {movies} = props;

  const history = useHistory();
  const handleFilmCardClick = () => history.push(AppRoute.FILM);

  return (
    <div className="catalog__films-list">
      {movies.map((movie) => (
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
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(MoviesList);
