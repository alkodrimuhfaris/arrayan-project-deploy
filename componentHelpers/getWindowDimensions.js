/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  // eslint-disable-next-line no-undef
  const { innerWidth: width, innerHeight: height } = window;

  const xs = width < 576;
  const sm = width < 768;
  const md = width < 992;
  const lg = width < 1200;
  const xl = width >= 1200;

  return {
    width,
    height,
    xs,
    sm,
    md,
    lg,
    xl,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({width: -1, height: -1,  xs : false, sm : false, md: false, lg: false, xl: false});

  useEffect(() => {
    if (windowDimensions.width === -1) {
      setWindowDimensions(getWindowDimensions());
    }
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    // eslint-disable-next-line no-undef
    window.addEventListener('resize', handleResize);
    // eslint-disable-next-line no-undef
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
