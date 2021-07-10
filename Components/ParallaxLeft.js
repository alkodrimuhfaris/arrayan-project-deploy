import React from 'react';
import leftTop from '../Assets/Parallax/kiri-top.png';
import leftMid from '../Assets/Parallax/kiri-branch-middle.png';
import leftEnd from '../Assets/Parallax/kiri-end.png';
import useAspectRatio from '../helpers/useAspectRatio';

export default function Parallax({
  offsetY = 0,
  refHomeCont = {current: null},
  open = false,
  loading = false,
}) {
  const parallaxLeft = [
    {src: leftTop, position: '8%', speed: 0.7},
    {src: leftMid, position: '30%', speed: 0.5},
    {src: leftEnd, position: '35%', speed: 0.73},
  ];

  const refLeft = React.useRef(null);
  const whLeft = useAspectRatio({ref: refLeft, aRxl: 1, aRlg: 1});

  return (
    <div
      className={`parallax-left ${open ? 'open' : ''} ${
        loading ? 'loading' : ''
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
                // ...whLeft,
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
