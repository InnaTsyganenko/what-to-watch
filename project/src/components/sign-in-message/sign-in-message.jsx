import React from 'react';
import PropTypes from 'prop-types';

function SignInMessage({errorMessage}) {

  return (
    <div className="sign-in__message" style={{marginTop: '30px'}}>
      {errorMessage}
    </div>
  );
}

SignInMessage.propTypes = {
  errorMessage: PropTypes.any,
};

export default SignInMessage;
