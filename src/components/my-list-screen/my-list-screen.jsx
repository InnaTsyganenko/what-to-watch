import React from 'react';
import {useSelector} from 'react-redux';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import {logoClassName} from '../../const';
import Copyright from '../copyright/copyright';
import SmallFilmCard from '../small-film-card/small-film-card';
import {getMovies} from '../../store/movies-data/selectors';
import {getMyList} from '../../store/user/selectors';

function MyListScreen() {

  const movies = useSelector(getMovies);
  const myList = useSelector(getMyList);
  const myListMovies = movies.filter(({id}) => myList.includes(id));

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo logoClassName={logoClassName.HEADER_LOGO} />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {myListMovies.map((movie) => (
            <React.Fragment key={movie.id}>
              <SmallFilmCard
                movie={movie}
              />
            </React.Fragment>))}
        </div>
      </section>
      <footer className="page-footer">
        <Logo logoClassName={logoClassName.FOOTER_LOGO} />
        <Copyright />
      </footer>
    </div>
  );
}

export default MyListScreen;
