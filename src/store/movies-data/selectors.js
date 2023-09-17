import {NameSpace} from '../root-reducer';

export const getMovies = (state) => state[NameSpace.DATA].movies;
export const getSimilarMovies = (state) => state[NameSpace.DATA].similarMovies;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getPromo = (state) => state[NameSpace.DATA].promo;
