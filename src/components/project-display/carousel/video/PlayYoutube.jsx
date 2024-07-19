import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import './PlayYoutube.scss';

function PlayYoutube({ videoData }) {
  const [data, setData] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setData(videoData);
  }, [videoData]);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    setLoaded(true);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [data]);

  useEffect(() => {
    const handleLoad = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const opts = {
    height: dimensions.height,
    width: dimensions.width,
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };

  function onReady(e) {
    e.target.pauseVideo();
  }

  return (
    <div ref={containerRef} className="video-container">
      {data && data.src && loaded && (
        <YouTube
          className="video"
          videoId={data.src}
          opts={opts}
          onReady={(e) => onReady(e)}
          id="video"
        />
      )}
    </div>
  );
}

export default PlayYoutube;
