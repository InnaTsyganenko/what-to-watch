import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {FILMS_RENDER_STEP} from '../../const';

function ShowMoreButton(props) {
  const {moviesCountForRender, onShowMoreClick, moviesLength} = props;


  return (
    <div className="catalog__more">
      {(moviesLength <= moviesCountForRender)
        ? null
        :
        <button className="catalog__button" type="button"
          onClick={() => onShowMoreClick(moviesCountForRender + FILMS_RENDER_STEP, moviesLength)}
        >
          Show more
        </button>}
    </div>
  );
}

ShowMoreButton.propTypes = {
  moviesCountForRender: PropTypes.number.isRequired,
  onShowMoreClick: PropTypes.func.isRequired,
  moviesLength: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  moviesCountForRender: state.moviesCountForRender,
  moviesLength: state.movies.length,
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreClick(moviesCountForRender, moviesLength) {
    dispatch(ActionCreator.sliceListMovies(moviesCountForRender, moviesLength));
  },
});

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
