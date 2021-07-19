import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';
import {logoClassName, filmStates} from '../../const';
import FilmCardTabs from '../film-card-tabs/film-card-tabs';
import FilmPageOverview from '../film-page-overview/film-page-overview';
import FilmPageDetails from '../film-page-details/film-page-details';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';
import CatalogLikeThis from '../catalog-like-this/catalog-like-this';
import Copyright from '../copyright/copyright';
import {connect} from 'react-redux';
import {fetchComments, fetchSimilarMoviesList} from '../../store/api-actions';
function FilmScreen(props) {
  const {originalMovies, pickedId, getIdMovie, handleFilmCardClick, loadSimilarMovies, loadComments} = props;
  const [state, setState] = useState({
    activeItem: {
      [filmStates.OVERVIEW]: true,
    },
  });

  const onLoadData = () => {
    loadSimilarMovies(pickedId);
    loadComments(pickedId);
  };

  return (
    <div onLoad={onLoadData}>
      {originalMovies.filter((movie) => movie.id === pickedId).map((movie) => (
        <React.Fragment key={movie.id}>
          <section className="film-card film-card--full">
            <div className="film-card__hero">
              <div className="film-card__bg">
                <img src={movie.backgroundImage} alt={movie.name} />
              </div>
              <h1 className="visually-hidden">WTW</h1>
              <header className="page-header film-card__head">
                <Logo logoClassName={logoClassName.HEADER_LOGO} />
                <UserBlock />
              </header>
              <div className="film-card__wrap">
                <div className="film-card__desc">
                  <h2 className="film-card__title">{movie.name}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{movie.genre}</span>
                    <span className="film-card__year">{movie.released}</span>
                  </p>
                  <FilmCardButtons />
                </div>
              </div>
            </div>
            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img src={movie.posterImage} alt={movie.name} width={218} height={327} />
                </div>
                <div className="film-card__desc">
                  <FilmCardTabs state={state} setState={setState} />
                  {(state.state === 'Overview' || state.activeItem[filmStates.OVERVIEW]) && <FilmPageOverview />}
                  {(state.activeItem[filmStates.DETAILS]) && <FilmPageDetails movie={movie} />}
                  {(state.activeItem[filmStates.REVIEWS]) && <FilmPageReviews />}
                </div>
              </div>
            </div>
          </section>
          <div className="page-content">
            <CatalogLikeThis
              getIdMovie={getIdMovie}
              handleFilmCardClick={handleFilmCardClick}
            />
            <footer className="page-footer">
              <Logo logoClassName={logoClassName.FOOTER_LOGO} />
              <Copyright />
            </footer>
          </div>
        </React.Fragment>))}
    </div>
  );
}

FilmScreen.propTypes = {
  originalMovies: PropTypes.array.isRequired,
  pickedId: PropTypes.number,
  getIdMovie: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired,
  loadSimilarMovies: PropTypes.func.isRequired,
  handleFilmCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  originalMovies: state.originalMovies,
  pickedId: state.pickedId,
});

const mapDispatchToProps = (dispatch) => ({
  loadSimilarMovies(id) {
    dispatch(fetchSimilarMoviesList(id));
  },
  loadComments(id) {
    dispatch(fetchComments(id));
  },
});

export {FilmScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FilmScreen);
