import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const moviesNames = [
  'Fantastic Beasts: The Crimes of Grindelwald',
  'Bohemian Rhapsody',
  'Macbeth',
  'Aviator',
  'We need to talk about Kevin',
  'What We Do in the Shadows',
  'Revenant',
  'Johnny English',
  'Shutter Island',
  'Pulp Fiction',
  'No Country for Old Men',
  'Snatch',
  'Moonrise Kingdom',
  'Seven Years in Tibet',
  'Midnight Special',
  'War of the Worlds',
  'Dardjeeling Limited',
  'Orlando',
  'Mindhunter',
  'Midnight Special',
];

const movieTitle = ['The Grand Budapest Hotel'];
const movieGenre = ['Drama'];
const movieReleaseDate = ['2014'];

ReactDOM.render(
  <React.StrictMode>
    <App moviesNames={moviesNames}
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieReleaseDate={movieReleaseDate}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
