import React from 'react';
import {parallaxLeft} from '../lib/dto';

export default function ParallaxLeft({
  offsetY = 0,
  open = false,
  loading = false,
  refHomeCont = {current: null},
}) {
  return (
    <div
      className={`parallax-left ${loading ? 'loading' : ''} ${
        open ? 'open' : ''
      }`}
    >
      <div className="parallax-left-relative">
        {parallaxLeft.map((val, idx) => {
          const {src, position, speed} = val;
          return (
            <div
              key={idx}
              style={{
                transform: refHomeCont.current
                  ? `translateY(${speed * offsetY}px)`
                  : '',
                top: position,
              }}
              className="left-wrapper"
            >
              <div className="position-relative w-100 h-100">
                <img src={src} alt={`parallax-left-${idx}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
