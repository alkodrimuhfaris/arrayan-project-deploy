import React from 'react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import imageStorage from '../../helpers/imageStorage';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import carouselControler from '../../componentHelpers/carouselControler';

export default function SubProjectImage({images = []}) {
  const [ref1, wref1, href1] = getComponentWidth();

  const slider = [
    {class: 'left', Icon: AiOutlineArrowLeft},
    {class: 'right', Icon: AiOutlineArrowRight},
  ];

  const {
    carouselArray: imagesArray,
    carouselNum: carousel,
    transition,
    sliderFunc: sliderAct,
    dotBtn: DotBtn,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  } = carouselControler({
    carousel: images,
    rightDir: slider[1].class,
    leftDir: slider[0].class,
    infinity: true,
    loopNumber: 2,
  });

  return (
    <div ref={ref1} className="subproject-img-cont">
      {slider.map((val, index) => {
        const {class: cls, Icon} = val;
        return (
          <button
            key={index}
            type="button"
            onClick={() => sliderAct(cls)}
            className={`sp-slider-img ${cls}`}
          >
            <Icon />
          </button>
        );
      })}
      <div
        style={{
          transform: `translate(-${carousel * wref1}px, 0px)`,
          transition,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="subproject-img-tracker position-relative h-100 w-100"
      >
        {imagesArray.map((val, idx) => {
          const src = imageStorage(val);
          return (
            <div
              key={idx}
              className="subproject-img-carousel position-absolute h-100 w-100"
              style={{
                top: 0,
                left: `${idx * wref1}px`,
              }}
            >
              <img src={src} alt={`subproject-${idx}-${val}`} />
            </div>
          );
        })}
      </div>
      <div className="dot-subproject justify-content-center align-items-center d-flex w-100">
        <DotBtn />
      </div>
    </div>
  );
}
