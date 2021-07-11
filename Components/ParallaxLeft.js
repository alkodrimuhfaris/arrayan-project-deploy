import React from 'react';
import leftTop from '../Assets/Parallax/kiri-top.png';
import leftMid from '../Assets/Parallax/kiri-branch-middle.png';
import leftEnd from '../Assets/Parallax/kiri-end.png';

export default function ParallaxLeft({
  offsetY = 0,
  open = false,
  loading = false,
  refHomeCont = {current: null},
}) {
  const parallaxLeft = [
    {src: leftTop, position: '8%', speed: 0.7},
    {src: leftMid, position: '30%', speed: 0.5},
    {src: leftEnd, position: '35%', speed: 0.73},
  ];

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
