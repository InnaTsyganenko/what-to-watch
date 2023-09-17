import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import {logoClassName} from '../../const';
import Copyright from '../copyright/copyright';

function NotFoundScreen() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <section className="film-card" style={{flexGrow: '1', flexShrink: '0', flexBasis: 'auto'}}>
        <div className="film-card__bg">
          <img src="img/bg-header.jpg" alt="bg"/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="page-footer">
            <Logo logoClassName={logoClassName.HEADER_LOGO} />
            <p>Oooops!</p>
            <h2>404. The page does not exist.</h2>
            <h3>Go to <Link to="/" style={{color: 'inherit'}}> main page</Link>?</h3>
          </div>
        </header>
      </section>
      <div className="page-content" style={{flexGrow: '0', flexShrink: '0', flexBasis: 'auto'}}>
        <footer className="page-footer">
          <Logo logoClassName={logoClassName.FOOTER_LOGO} />
          <Copyright />
        </footer>
      </div>
    </div>
  );
}

export default NotFoundScreen;
