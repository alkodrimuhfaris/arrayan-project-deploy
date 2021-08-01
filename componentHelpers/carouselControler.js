import React from 'react';

export default function carouselControler(
  carousel = [],
  transition = '0.3s ease',
  rightDir = 'right',
  leftDir = 'left',
  infinity = true,
) {
  const [showCarousel, setShowCarousel] = React.useState([]);
  const [tr, setTransition] = React.useState(transition);
  const [idxCarousel, setIdxCarousel] = React.useState(0);
  const [lastAddedCar, setLastAdded] = React.useState(0);
  const [relativeChange, setRelativeChange] = React.useState(0);
  const [btnClicked, setBtnClicked] = React.useState('');
  const ref = React.useRef(null);

  const sliderFunc = (dir) => {
    setBtnClicked(dir);
    setRelativeChange((x) => {
      x = dir === leftDir ? -1 : +1;
      return x;
    });
    setLastAdded((x) => {
      x = dir === leftDir ? x - 1 : x + 1;
      x = dir === leftDir && x < 0 ? carousel.length - 1 : x;
      x = dir === rightDir && x > carousel.length - 1 ? 0 : x;
      return x;
    });
  };

  const dotFunc = (dotNumb) => {
    setBtnClicked('dot');
    setRelativeChange((x) => {
      x =
        lastAddedCar === carousel.length - 1 && lastAddedCar === 0
          ? carousel.length - 2
          : dotNumb - lastAddedCar;
      return x;
    });
    setLastAdded(dotNumb);
  };

  React.useEffect(() => {
    if (carousel.length) {
      const curPosition = (idxCarousel + 1) % carousel.length;
      if (relativeChange !== 0) {
        setIdxCarousel((prevState) => {
          const x = prevState + relativeChange;
          // if previous button is clicked
          if (btnClicked === leftDir) {
            if (prevState - 1 < 0) {
              setTransition('none');
              showCarousel.unshift(...carousel);
              return carousel.length;
            }
            return prevState - 1;
          }
          // everytime next or dot button is clicked
          if (x >= 0) {
            for (let y = curPosition - 1; y < lastAddedCar; y++) {
              if (y < 0) {
                showCarousel.push(carousel[carousel.length - 1]);
              } else {
                showCarousel.push(carousel[y]);
              }
            }
          }
          return x;
        });
        setRelativeChange(0);
      }
    }
  }, [relativeChange, carousel]);

  React.useEffect(() => {
    if (tr === 'none') {
      setTransition(transition);
      setIdxCarousel((x) => x - 1);
    }
  }, [tr]);

  React.useEffect(() => {
    if (!ref.current && carousel.length) {
      if (infinity) {
        const infinityCar = carousel.map((val) => val);
        setShowCarousel([
          ...infinityCar,
          ...infinityCar,
          ...infinityCar,
          ...infinityCar,
          ...infinityCar,
          ...infinityCar,
          ...infinityCar,
          ...infinityCar,
          ...infinityCar,
          ...infinityCar,
          ...infinityCar,
          ...infinityCar,
        ]);
      } else {
        setShowCarousel(() => carousel.map((val) => val));
      }
      ref.current = carousel.length;
    }
  }, [carousel]);

  const dotBtn = ({className = ''}) => (
    <div
      className={`slider-btn-global bg-primary justify-content-center align-items-center d-flex w-100 ${className}`}
    >
      {carousel.map((_, index) => {
        const setActive = index === lastAddedCar ? 'active' : '';
        return (
          <button
            key={index}
            type="button"
            name={`dot-carousel-${index}`}
            className={`slider-btns mx-1 ${setActive}`}
            onClick={() => dotFunc(index)}
          >
            &nbsp;
          </button>
        );
      })}
    </div>
  );

  return [showCarousel, idxCarousel, tr, sliderFunc, dotBtn];
}
