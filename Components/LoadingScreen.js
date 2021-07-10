import React from 'react';

export default function LoadingScreen({loading = false}) {
  return (
    <div
      className={`loading-screen ${
        loading
          ? 'd-flex align-items-center justify-content-center bg-ar-dark'
          : 'loaded'
      }`}
    >
      <div>
        <div className="animation-top" />
        <div className="animation-center" />
        <div className="animation-bottom" />
      </div>
    </div>
  );
}
