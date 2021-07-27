import React from 'react';
import Spinner from '../spinner/spinner';

function LoadingScreen() {
  return (
    <div>
      <p style={{position: 'fixed',
        top: '30%',
        left: '45%',
        fontSize: '50px',
        color: '#9cfdc4',
        fontWeight: 'bold'}}
      >
        Loading
      </p>
      <Spinner />
    </div>
  );
}

export default LoadingScreen;
