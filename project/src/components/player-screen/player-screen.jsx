import React from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';

function PlayerScreen(props) {
  const {promoFilm} = props;
  const history = useHistory();
  const onExitClick = () => history.push(AppRoute.ROOT);

  const timestamp = promoFilm.runTime;
  const hours = Math.floor(timestamp / 60 / 60);
  const minutes = Math.floor(timestamp / 60) - (hours * 60);
  const seconds = timestamp % 60;
  const formatted =
  timestamp < 60
    ? [
      seconds.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
    ].join(':')
    : [
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0'),
      hours.toString().padStart(2, '0'),
    ].join(':');
  return (
    <div className="player">
      <video src="#" className="player__video" poster={promoFilm.backgroundImage} />
      <button type="button" className="player__exit"
        onClick={onExitClick}
      >Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatted}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

PlayerScreen.propTypes = {
  promoFilm: PropTypes.object.isRequired,
};

export default PlayerScreen;
