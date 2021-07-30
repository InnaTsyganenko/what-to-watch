import {combineReducers} from 'redux';
import {user} from './user/user';
import {moviesData} from './movies-data/movies-data';
import {moviesOperations} from './movies-operations/movies-operations';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const NameSpace = {
  USER: 'USER',
  DATA: 'DATA',
  MOVIES: 'MOVIES',
};

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'MOVIES'],
};

const moviesPersistConfig = {
  key: 'MOVIES',
  storage,
  whitelist: ['pickedId'],
};

const rootReducer = combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.DATA]: moviesData,
  [NameSpace.MOVIES]: persistReducer(moviesPersistConfig, moviesOperations),
});

export default persistReducer(rootPersistConfig, rootReducer);
