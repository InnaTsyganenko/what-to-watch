import React from 'react';
import PropTypes from 'prop-types';
import SmallFilmCard from '../small-film-card/small-film-card';
import {connect} from 'react-redux';

function MoviesList(props) {
  const {originalMovies, filtredMovies, moviesCountForRender, getIdMovie, handleFilmCardClick} = props;

  return (
    <div className="catalog__films-list">
      {originalMovies.filter(({id}) => filtredMovies.includes(id)).slice(0, moviesCountForRender).map((movie) => (
        <React.Fragment key={movie.id}>
          <SmallFilmCard
            movie={movie}
            getIdMovie={getIdMovie}
            handleFilmCardClick={handleFilmCardClick}
          />
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
});

export default connect(mapStateToProps)(MoviesList);
