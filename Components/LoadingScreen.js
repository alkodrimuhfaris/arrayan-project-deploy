import React from 'react';
import animationTop from '../Assets/Icons/arrayan-group-top.svg';
import animationMid from '../Assets/Icons/arrayan-group-mid.svg';
import animationBot from '../Assets/Icons/arrayan-group-bot.svg';

export default function LoadingScreen({movingPart = false, loading = false}) {
  return (
    <div
      className={`loading-screen d-flex align-items-center justify-content-center bg-ar-dark
      ${loading ? '' : 'loaded'}`}
    >
      <div>
        <div className="animation-top">
          <img src={animationTop} alt="animation-top" />
        </div>
        <div className="animation-center">
          <img src={animationMid} alt="animation-mid" />
        </div>
        <div className="animation-bottom">
          <img src={animationBot} alt="animation-bot" />
        </div>
      </div>
    </div>
  );
}
