import React from 'react';
import PropTypes from 'prop-types';
import SmallFilmCard from '../small-film-card/small-film-card';
import {connect} from 'react-redux';

function MoviesList(props) {
  const {movies, moviesCountForRender, handleFilmCardClick, filtredMovies} = props;

  return (
    <div className="catalog__films-list">
      {movies
        .filter(({id}) => filtredMovies.includes(id))
        .slice(0, moviesCountForRender)
        .map((movie) => (
          <React.Fragment key={movie.id}>
            <SmallFilmCard
              movie={movie}
              handleFilmCardClick={handleFilmCardClick}
            />
          </React.Fragment>))}
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  filtredMovies: PropTypes.array.isRequired,
  moviesCountForRender: PropTypes.number.isRequired,
  handleFilmCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  filtredMovies: state.filtredMovies,
  moviesCountForRender: state.moviesCountForRender,
});

export default connect(mapStateToProps)(MoviesList);
