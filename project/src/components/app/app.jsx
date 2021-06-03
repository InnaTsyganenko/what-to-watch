import React from 'react';
import Main from '../main/main';

import PropTypes from 'prop-types';

function App(props) {
  const {moviesNames, movieTitle, movieGenre, movieReleaseDate} = props;

  return (
    <Main moviesNames={moviesNames}
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieReleaseDate={movieReleaseDate}
    />
  );
}

App.propTypes = {
  moviesNames: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieReleaseDate: PropTypes.string.isRequired,
};

export default App;
