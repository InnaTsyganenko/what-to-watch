import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Logo(props) {
  const {logoClassName} = props;

  return (
    <div className="logo">
      <Link className={logoClassName} to="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  logoClassName: PropTypes.string.isRequired,
};

export default Logo;
