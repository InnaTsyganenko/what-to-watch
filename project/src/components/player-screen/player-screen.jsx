import React, {useState, useEffect, useRef} from 'react';
import browserHistory from '../../browser-history';
import {useSelector} from 'react-redux';
import {getPickedId} from '../../store/movies-operations/selectors';
import {getMovies} from '../../store/movies-data/selectors';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner';

function PlayerScreen({autoPlay}) {

  const handleExitButtonClick = () => browserHistory.push(AppRoute.ROOT);

  const movies = useSelector(getMovies);
  const pickedId = useSelector(getPickedId);

  const movie = movies.find((item) => item.id === pickedId);

  const [isLoading, setIsLoading] = useState(true);
  const [isCanPlay, setIsCanPlaying] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const runTimeInSeconds = movie.runTime * 60;

  const [isTimeElapsed, setTimeElapsed] = useState(runTimeInSeconds);

  const videoRef = useRef();

  const handleWaitingVideo = function(bool) {
    setIsCanPlaying(bool);
  };
  const handleLoadedData = function() {
    setIsLoading(isLoading);
  };

  const handlePlayClick = function(bool) {
    setIsPlaying(bool);
  };

  const handleFullScreenClick = function() {
    videoRef.current.parentNode.requestFullscreen();
  };

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const getTimeElapsed = function() {
    setTimeElapsed(Math.floor(runTimeInSeconds - videoRef.current.currentTime));
  };

  const setNewCirrentTime = function(e) {
    const bounds = e.target.getBoundingClientRect();
    const max = bounds.width;
    const pos = e.pageX - bounds.left;
    const dual = pos / max;
    videoRef.current.currentTime = runTimeInSeconds * dual;
  };

  const timestamp = isTimeElapsed;
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
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0'),
    ].join(':');

  return (
    <div className="player">
      {isCanPlay ? <Spinner /> : null}
      <video
        src={movie.videoLink}
        ref={videoRef}
        onLoadedData={handleLoadedData}
        onWaiting={() => handleWaitingVideo(true)}
        onPlaying={() => handleWaitingVideo(false)}
        onPause={() => handleWaitingVideo(false)}
        className="player__video"
        autoPlay
        onTimeUpdate={getTimeElapsed}
      />
      <button type="button" className="player__exit"
        onClick={handleExitButtonClick}
      >Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              style={{cursor: 'pointer'}}
              className="player__progress" value={runTimeInSeconds - isTimeElapsed} max={runTimeInSeconds}
              onClick={(e) => setNewCirrentTime(e)}
            />
            <div className="player__toggler"
              style={{left: `${(runTimeInSeconds - isTimeElapsed) * 100 / runTimeInSeconds}%`}}
            >Toggler
            </div>
          </div>
          <div className="player__time-value">{formatted}</div>
        </div>
        <div className="player__controls-row">
          <button
            onClick={() => {
              isPlaying
                ? handlePlayClick(false)
                : handlePlayClick(true);
            }}
            type="button"
            className="player__play"
          >
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'} />
            </svg>
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">Transpotting</div>
          <button
            onClick={handleFullScreenClick}
            type="button"
            className="player__full-screen"
          >
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
  autoPlay: PropTypes.bool.isRequired,
};

export default PlayerScreen;
