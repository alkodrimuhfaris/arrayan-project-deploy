import React from 'react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import carouselControler from '../../componentHelpers/carouselControler';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';
import HeaderImg from './HeaderImg';
import HeaderText from './HeaderText';

export default function TopHeader({
  open = false,
  refTopHeader = {current: null},
  carouselTop = [],
  topCarTimer = 1,
}) {
  const {md} = useWindowDimensions();

  const topSlider = [
    {class: 'slider-left', Icon: AiOutlineArrowLeft},
    {class: 'slider-right', Icon: AiOutlineArrowRight},
  ];

  const {
    carouselArray,
    carouselNum,
    transition,
    sliderFunc,
    dotBtn: DotBtn,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  } = carouselControler({
    carousel: carouselTop,
    transition: '0.3s ease',
    rightDir: topSlider[1].class,
    leftDir: topSlider[0].class,
    infinity: true,
    loopNumber: 2,
    timer: topCarTimer,
  });

  return (
    <div className="top-header container-lg mb-5 mb-md-2">
      <div
        ref={refTopHeader}
        className="text-ctn row row-eq-height no-gutters position-relative"
      >
        {/* slider carousel */}
        <div
          className={`slider-btn ${
            md ? 'col-12 w-100 order-2 order-md-3' : 'position-absolute'
          } d-flex`}
        >
          <div className="slider-btn-ctl justify-content-center align-items-center d-flex w-100">
            <DotBtn />
          </div>
        </div>

        {/* text container */}
        <HeaderText carouselTop={carouselArray} topCarousel={carouselNum} />

        {/* container image carousel */}
        <HeaderImg
          carouselTop={carouselArray}
          topCarousel={carouselNum}
          open={open}
          setTopCarousel={sliderFunc}
          topSlider={topSlider}
          handleTouchEnd={handleTouchEnd}
          handleTouchMove={handleTouchMove}
          handleTouchStart={handleTouchStart}
          transition={transition}
        />
      </div>
    </div>
  );
}
