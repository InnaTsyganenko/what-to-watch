import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import MoviesList from '../movies-list/movies-list';
import {logoClassName} from '../../const';
import Copyright from '../copyright/copyright';

function MyListScreen(props) {
  const {films} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo logoClassName={logoClassName.HEADER_LOGO} />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList films={films} />
      </section>
      <footer className="page-footer">
        <Logo logoClassName={logoClassName.FOOTER_LOGO} />
        <Copyright />
      </footer>
    </div>
  );
}

MyListScreen.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MyListScreen;
