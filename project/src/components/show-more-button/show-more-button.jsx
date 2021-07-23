import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {sliceListMovies} from '../../store/action';
import {FILMS_RENDER_STEP} from '../../const';

function ShowMoreButton(props) {
  const {moviesCountForRender, filtredMovies} = props;
  const dispatch = useDispatch();
  const moviesCountForRenderWithStep = moviesCountForRender + FILMS_RENDER_STEP;

  return (
    <div className="catalog__more">
      {(filtredMovies.length <= moviesCountForRender)
        ? null
        :
        <button className="catalog__button" type="button"
          onClick={() => dispatch(sliceListMovies(moviesCountForRenderWithStep, filtredMovies.length))}
        >
          Show more
        </button>}
    </div>
  );
}

ShowMoreButton.propTypes = {
  moviesCountForRender: PropTypes.number.isRequired,
  filtredMovies: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  moviesCountForRender: state.moviesCountForRender,
  filtredMovies: state.filtredMovies,
});

export {ShowMoreButton};
export default connect(mapStateToProps, null)(ShowMoreButton);
