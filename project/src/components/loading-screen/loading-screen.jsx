import React from 'react';
import Spinner from '../spinner/spinner';

function LoadingScreen() {
  return (
    <div style={{height: '100%',
      width: '100%',
      backgroundImage: 'radial-gradient(circle farthest-corner at center, #939ba3 0%, #bdc2c7 100%)',
    }}
    >
      <p style={{position: 'fixed',
        top: '35%',
        left: 'calc(50% - 75px)',
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
