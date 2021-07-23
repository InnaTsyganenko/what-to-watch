import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SmallFilmCard from '../small-film-card/small-film-card';

function CatalogLikeThis(props) {
  const {similarMovies, handleFilmCardClick, pickedId} = props;

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {similarMovies.filter((movie) => movie.id !== pickedId).slice(0, 4).map((movie) => (
          <React.Fragment key={movie.id}>
            <SmallFilmCard
              movie={movie}
              handleFilmCardClick={handleFilmCardClick}
            />
          </React.Fragment>))}
      </div>
    </section>
  );
}

CatalogLikeThis.propTypes = {
  similarMovies: PropTypes.array,
  handleFilmCardClick: PropTypes.func.isRequired,
  pickedId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  similarMovies: state.similarMovies,
  pickedId: state.pickedId,
});

export default connect(mapStateToProps)(CatalogLikeThis);
