import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

function PreviewPlayer({film, autoPlay, src}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const videoRef = useRef();

  const handleLoadedData = function() {
    setIsLoading(isLoading);
  };

  const handleMouseActions = function(action) {
    setIsPlaying(action);
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
      onMouseOver={() => handleMouseActions(true)}
      onMouseOut={() => handleMouseActions(false)}
    >
      <video src={src} ref={videoRef} className="player__video"
        poster={film.previewImage}
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
  film: PropTypes.object.isRequired,
};

export default PreviewPlayer;
