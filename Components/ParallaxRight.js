import React from 'react';
import rightTop from '../Assets/Parallax/kanan-branch-top.png';
import rightMid from '../Assets/Parallax/kanan-mid.png';
import rightEnd from '../Assets/Parallax/kanan-branch-end.png';
import useAspectRatio from '../helpers/useAspectRatio';

export default function Parallax({
  offsetY = 0,
  refHomeCont = {current: null},
  open = false,
  loading = false,
}) {
  const parallaxRight = [
    {src: rightTop, position: '-1%', speed: 0.3},
    {src: rightMid, position: '20%', speed: 0.7},
    {src: rightEnd, position: '45%', speed: 0.52},
  ];
  const refRight = React.useRef(null);
  const whRight = useAspectRatio({ref: refRight, aRxl: 1, aRlg: 1});

  return (
    <div
      className={`parallax-right ${open ? 'open' : ''} ${
        loading ? 'loading' : ''
      }`}
    >
      <div ref={refRight} className="parallax-right-relative">
        {parallaxRight.map((val, idx) => {
          const {src, position, speed} = val;
          return (
            <div
              key={idx}
              style={{
                transform: refHomeCont.current
                  ? `translateY(${speed * offsetY}px)`
                  : '',
                width: idx === 0 ? '200%' : '100%', // whRight.width,
                // height: whRight.height,
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
