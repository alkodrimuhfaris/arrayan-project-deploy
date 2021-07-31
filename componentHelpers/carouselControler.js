import React from 'react';

export default function carouselControler(
  carousel = [],
  transition = '0.3s ease',
) {
  const [showCarousel, setShowCarousel] = React.useState([]);
  const [tr, setTransition] = React.useState(transition);
  const [idxCarousel, setIdxCarousel] = React.useState(0);
  const ref = React.useRef(null);

  const sliderFunc = (dir) => {
    setIdxCarousel((x) => {
      x = dir === 'left' ? x - 1 : x + 1;
      if (dir === 'left') {
        if (x < 0) {
          showCarousel.unshift(...carousel);
          setTransition('none');
          return ref.current;
        }
      }
      if (dir === 'right') {
        const y = x === showCarousel.length ? 0 : x - 1;
        showCarousel.push(showCarousel[y]);
      }
      return x;
    });
  };

  React.useEffect(() => {
    if (transition === 'none') {
      setTransition(transition);
      setIdxCarousel((x) => x - 1);
    }
  }, [transition]);

  React.useEffect(() => {
    if (!ref.current && carousel.length) {
      setShowCarousel(() => showCarousel.map((val) => val));
      ref.current = showCarousel.length;
    }
  }, [carousel]);

  return [showCarousel, idxCarousel, tr, sliderFunc];
}
