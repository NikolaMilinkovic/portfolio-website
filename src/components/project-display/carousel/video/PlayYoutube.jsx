import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import './PlayYoutube.scss';

function PlayYoutube({ videoData }) {
  const [data, setData] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 300 });
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setData(videoData);
  }, [videoData]);

  useEffect(() => {
    setLoaded(true);
    let resizeTimeout;

    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (containerRef.current) {
          setDimensions({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
          });
        }
      }, 1000);
    }
    function handleLoad() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    }

    handleResize();

    window.addEventListener('load', handleLoad);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
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
    <div ref={containerRef} className="yt-video-container">
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
