import React from 'react';
import Logo from '../logo/logo';

function NotFoundScreen() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <section className="film-card" style={{flexGrow: '1', flexShrink: '0', flexBasis: 'auto'}}>
        <div className="film-card__bg">
          <img src="img/bg-header.jpg" alt="bg"/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <Logo />
            <p>Oooops!</p>
            <h2>404. The page does not exist.</h2>
            <h3>Go to <a href="/" style={{color: 'inherit'}}> main page</a>?</h3>
          </div>
        </header>
      </section>
      <div className="page-content" style={{flexGrow: '0', flexShrink: '0', flexBasis: 'auto'}}>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default NotFoundScreen;
