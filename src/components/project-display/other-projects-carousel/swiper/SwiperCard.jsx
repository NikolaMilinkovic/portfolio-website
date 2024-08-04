/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useRef, useEffect } from 'react';
import CardButton from '../../card/cardButton/CardButton';
import './SwiperCard.scss';

function SwiperCard({
  project, index, isVisible = false, width,
}) {
  const [data, setData] = useState(project || null);
  const container = useRef(null);
  useEffect(() => {
    setData(project);
  }, [project]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        if (container.current) {
          container.current.classList.add('swiper-show-left');
          container.current.classList.remove('swiper-hide-left');
        }
      }, index * 110);
    }
  }, [isVisible, index]);
  return (
    <>
      {data && (
      <div
        ref={container}
        className="swiper-card swiper-hide-left"
        href={data.gitLink}
        target="_blank"
        style={{ width }}
      >
        <div className="swiper-card-inside">
          <p className="swiper-header">{data.name}</p>
          <img
            key={`carousel-image-${index}`}
            className="carousel-img"
            src={data.images[0]}
            alt="project description"
          />
          <div className="buttons-container">
            <CardButton
              className="button"
              path={data.demoLink}
              text="Live"
            />
            <CardButton
              className="button"
              path={data.gitLink}
              text="Code"
            />
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default SwiperCard;
