import React from 'react';
import {parallaxRight} from '../lib/dto';

export default function ParallaxRight({
  offsetY = 0,
  open = false,
  loading = false,
  refHomeCont = {current: null},
}) {
  return (
    <div
      className={`parallax-right ${loading ? 'loading' : ''} ${
        open ? 'open' : ''
      }`}
    >
      <div className="parallax-right-relative">
        {parallaxRight.map((val, idx) => {
          const {src, position, speed} = val;
          return (
            <div
              key={idx}
              style={{
                transform: refHomeCont.current
                  ? `translateY(${speed * offsetY}px)`
                  : '',
                width: idx === 0 ? '200%' : '100%',
                top: position,
              }}
              className="right-wrapper"
            >
              <div className="position-relative w-100 h-100">
                <img src={src} alt={`parallax-right-${idx}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
