import {NameSpace} from '../root-reducer';

export const getMoviesCountForRender = (state) => state[NameSpace.MOVIES].moviesCountForRender;

export const getGenre = (state) => state[NameSpace.MOVIES].genre;

export const getPickedId = (state) => state[NameSpace.MOVIES].pickedId;

export const getFiltredMovies = (state) => state[NameSpace.DATA].movies
  .filter((movie) => movie.genre === state[NameSpace.MOVIES].genre);

