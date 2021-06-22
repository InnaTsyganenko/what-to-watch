import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import promoFilm from './mocks/promo-film.js';
import films from './mocks/films.js';
import reviews from './mocks/reviews.js';

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm={promoFilm}
      films={films}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
