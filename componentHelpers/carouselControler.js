import React from 'react';
import useWindowDimensions from './getWindowDimensions';

export default function carouselControler({
  carousel = [],
  transition = '0.3s ease',
  rightDir = 'right',
  leftDir = 'left',
  loopNumber = 100,
  infinity = true,
}) {
  const [showCarousel, setShowCarousel] = React.useState([]);
  const [tr, setTransition] = React.useState(transition);
  const [idxCarousel, setIdxCarousel] = React.useState(0);
  const [lastAddedCar, setLastAdded] = React.useState(0);
  const [relativeChange, setRelativeChange] = React.useState(0);
  const [btnClicked, setBtnClicked] = React.useState('');
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const ref = React.useRef(null);

  const {width} = useWindowDimensions();

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

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      // do your stuff here for left swipe
      setBtnClicked(rightDir);
      setRelativeChange(1);
      setLastAdded((x) => {
        x += 1;
        x = x > carousel.length - 1 ? 0 : x;
        return x;
      });
    }

    if (touchStart - touchEnd < -150) {
      // do your stuff here for right swipe
      setBtnClicked(leftDir);
      setRelativeChange(-1);
      setLastAdded((x) => {
        x -= 1;
        x = x < 0 ? carousel.length - 1 : x;
        return x;
      });
    }
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
    setIdxCarousel(0);
  }, [width]);

  React.useEffect(() => {
    if (tr === 'none') {
      setTransition(transition);
      setIdxCarousel((x) => x - 1);
    }
  }, [tr]);

  React.useEffect(() => {
    if (!ref.current && carousel.length) {
      if (infinity) {
        const infinityCar = [];
        for (let i = 0; i < loopNumber; i++) {
          infinityCar.push(...carousel);
        }
        setShowCarousel(infinityCar);
      } else {
        setShowCarousel(() => carousel.map((val) => val));
      }
      ref.current = carousel.length;
    }
  }, [carousel]);

  const dotBtn = ({className = ''}) => (
    <div
      className={`slider-btn-global justify-content-center align-items-center d-flex w-100 ${className}`}
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

  return {
    carouselArray: showCarousel,
    carouselNum: idxCarousel,
    transition: tr,
    sliderFunc,
    dotBtn,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
