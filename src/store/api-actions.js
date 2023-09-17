import browserHistory from '../browser-history';
import {loadPromo,
  loadMovies,
  requireAuthorization,
  logout as closeSession,
  loadSimilarMovies,
  loadComments} from './action';
import {AppRoute, AuthorizationStatus, APIRoute} from '../const';
import {showAlert} from '../utils';

export const fromApi = (apiObj) => {
  const adapted = Object.assign(
    {},
    apiObj,
    {
      backgroundColor: apiObj.background_color,
      backgroundImage: apiObj.background_image,
      isFavorite: apiObj.is_favorite,
      posterImage: apiObj.poster_image,
      previewImage: apiObj.preview_image,
      previewVideoLink: apiObj.preview_video_link,
      runTime: apiObj.run_time,
      scoresCount: apiObj.scores_count,
      videoLink: apiObj.video_link,
    },
  );

  delete adapted.background_color;
  delete adapted.background_image;
  delete adapted.is_favorite;
  delete adapted.poster_image;
  delete adapted.preview_image;
  delete adapted.preview_video_link;
  delete adapted.run_time;
  delete adapted.scores_count;
  delete adapted.video_link;

  return adapted;
};

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(loadPromo(fromApi(data))))
);

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIES)
    .then(({data}) => dispatch(loadMovies(data.map((element) => fromApi(element)))))
);

export const fetchSimilarMoviesList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.MOVIES}/${id}${APIRoute.SIMILAR}`)
    .then(({data}) => dispatch(loadSimilarMovies(data.map((element) => fromApi(element)))))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}${id}`)
    .then(({data}) => dispatch(loadComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => browserHistory.push(AppRoute.ROOT))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);

export const pushComment = (filmId, rating, comment) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}${filmId}`, {rating, comment})
    .then(() => browserHistory.push(`${APIRoute.MOVIES}/${filmId}`))
    .catch((err) => {
      showAlert(`Something wrong, please try again :( This is some kind of ${err}...`);
    })
);
