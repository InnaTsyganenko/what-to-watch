import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

function PreviewPlayer({movie, autoPlay, src}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const videoRef = useRef();

  const handleLoadedData = function() {
    setIsLoading(isLoading);
  };

  const handleMouseOver = function() {
    setIsPlaying(true);
  };

  const handleMouseOut = function() {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        videoRef.current.play();
      }, 1000);
      return () => clearTimeout(timer);
    }

    videoRef.current.load();
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }, [isPlaying]);

  return (
    <div className="small-film-card__image"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <video src={src} ref={videoRef} className="player__video"
        poster={movie.previewImage}
        onLoadedData={handleLoadedData}
        autoPlay
        muted
      />
    </div>
  );
}

PreviewPlayer.propTypes = {
  autoPlay: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
};

export default PreviewPlayer;
