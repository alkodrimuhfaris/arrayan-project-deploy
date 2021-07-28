import React from 'react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';

export default function HeaderImg({
  carouselTop = [],
  topCarousel = 0,
  open = false,
  setTopCarousel = () => {},
}) {
  const {xsO, smO, mdO, lgO, xlO} = useWindowDimensions();
  const refCar = React.useRef(null);
  const [ref1, wRef1, hRef1] = getComponentWidth();

  const topSlider = [
    {class: 'slider-left', Icon: AiOutlineArrowLeft},
    {class: 'slider-right', Icon: AiOutlineArrowRight},
  ];

  const sliderTopCar = (dir) => {
    setTopCarousel((x) => {
      x = dir === 'slider-left' ? x - 1 : x + 1;
      x = dir === 'slider-left' && x < 0 ? carouselTop.length - 1 : x;
      x = dir === 'slider-right' && x > carouselTop.length - 1 ? 0 : x;
      return x;
    });
  };

  return (
    <div className="header-img col-12 col-md-12 col-lg-2 order-1 order-md-2">
      <div
        ref={ref1}
        style={{
          height: `${wRef1 / 1.936}px`,
        }}
        className="header-img-container overflow-hidden"
      >
        <div className="position-relative w-100 h-100">
          <div className="carousel-cont-absolute">
            <ul
              ref={refCar}
              style={{
                transform: refCar.current
                  ? `translate(-${
                      refCar.current.offsetWidth * topCarousel
                    }px, 0px)`
                  : '',
                transition: '0.3s ease',
                width: '100%',
              }}
              className="ar_carousel_track position-relative"
            >
              {carouselTop.map((item, index) => {
                const setActive = index === topCarousel ? 'ar_car_active' : '';
                const widthCar = refCar.current
                  ? refCar.current.offsetWidth
                  : 0;
                const image = process.env.NEXT_PUBLIC_URL_BACKEND + item.image;
                return (
                  <li
                    style={{
                      left: `${index * widthCar}px`,
                    }}
                    key={index}
                    className={`ar_carousel_slide ${setActive}`}
                  >
                    <img src={image} alt={`carousel-${index}`} />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="slider-cont-absolute">
            <div
              className={`overflow-hidden slider-header-container ${
                open ? 'close' : ''
              } position-relative`}
            >
              {topSlider.map((val, index) => {
                const {Icon} = val;
                return (
                  <button
                    onClick={() => sliderTopCar(val.class)}
                    key={index}
                    name={val.class}
                    type="button"
                    className={`position-absolute d-flex align-items-center justify-content-center btn ${val.class}`}
                  >
                    <Icon />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
