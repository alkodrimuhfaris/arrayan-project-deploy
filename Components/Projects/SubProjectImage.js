import React from 'react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import imageStorage from '../../helpers/imageStorage';
import getComponentWidth from '../../componentHelpers/getComponentWidth';

export default function SubProjectImage({images = []}) {
  const [carousel, setCarousel] = React.useState(0);
  const [ref1, wref1, href1] = getComponentWidth();

  const slider = [
    {class: 'left', Icon: AiOutlineArrowLeft},
    {class: 'right', Icon: AiOutlineArrowRight},
  ];

  const sliderAct = (dir) => {
    setCarousel((x) => {
      x = dir === 'left' ? x - 1 : x + 1;
      x = dir === 'left' && x < 0 ? images.length - 1 : x;
      x = dir === 'right' && x > images.length - 1 ? 0 : x;
      return x;
    });
  };

  React.useEffect(() => {
    console.log(images);
  }, [images]);

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
        }}
        className="subproject-img-tracker position-relative h-100 w-100"
      >
        {images.map((val, idx) => {
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
        {images.map((_, index) => {
          const active = index === carousel ? 'active' : '';
          return (
            <button
              key={index}
              type="button"
              name={`dot-subproject-${index}`}
              className={`mx-1 ${active}`}
              onClick={() => setCarousel(index)}
            >
              &nbsp;
            </button>
          );
        })}
      </div>
    </div>
  );
}
