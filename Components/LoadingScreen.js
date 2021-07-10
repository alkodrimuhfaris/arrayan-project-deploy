import React from 'react';

export default function LoadingScreen({movingPart = false, loading = false}) {
  return (
    <div
      className={`loading-screen d-flex align-items-center justify-content-center bg-ar-dark
      ${movingPart ? '' : 'stop-move'} ${loading ? '' : 'loaded'}`}
    >
      <div>
        <div className="animation-top" />
        <div className="animation-center" />
        <div className="animation-bottom" />
      </div>
    </div>
  );
}
