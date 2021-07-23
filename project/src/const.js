export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM: '/films/',
  ADD_REVIEW: '/review',
  PLAYER: '/player/:id',
};

export const logoClassName = {
  HEADER_LOGO: 'logo__link',
  FOOTER_LOGO: 'logo__link logo__link--light',
};

export const filmStates = {
  OVERVIEW: 'Overview',
  DETAILS: 'Details',
  REVIEWS: 'Reviews',
};

export const RATINGS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export const DEFAULT_GENRE = 'All genres';
export const FILMS_RENDER_STEP = 8;
export const MIN_LENGTH_COMMENT = 50;
export const MAX_LENGTH_COMMENT = 400;

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  MOVIES: '/films',
  PROMO: '/promo',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments/',
  SIMILAR: '/similar',
};
