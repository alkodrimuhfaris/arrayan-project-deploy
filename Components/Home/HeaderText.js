import React from 'react';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';

export default function HeaderText({carouselTextTop = [], topCarousel = 0}) {
  const {sm, md, lg, xl} = useWindowDimensions();
  const refCarText = React.useRef(null);

  return (
    <div className="header-text col-12 order-3 order-md-1 panel col-md-13 col-lg-10 bg-ar-dark">
      <div className="container pt-0 pt-md-5 pt-lg-0 mt-0 mt-md-5 mt-lg-0">
        <section className="col-12 col-md-12 col-lg-6 overflow-hidden">
          <div
            ref={refCarText}
            style={{
              height: sm
                ? '300px'
                : md
                ? '300px'
                : lg
                ? '350px'
                : xl
                ? '350px'
                : '350px',
              width: '100%',
              transform: refCarText.current
                ? `translate(-${
                    refCarText.current.offsetWidth * topCarousel
                  }px, 0px)`
                : '',
              transition: '0.3s ease',
            }}
            className="text-carousel-cont w-100 position-relative"
          >
            {carouselTextTop.map((val, idx) => {
              const widthCar = refCarText.current
                ? refCarText.current.offsetWidth
                : 0;
              return (
                <div
                  style={{
                    left: `${idx * widthCar}px`,
                  }}
                  className="text-carousel w-100 h-100 px-4 pb-2 position-absolute"
                >
                  <h1 className="title text-uppercase">{val.title}</h1>
                  <p className="subtitle">{val.subtitle}</p>
                  <button type="button" className="btn btn-block">
                    {val.btnText}
                  </button>
                </div>
              );
            })}
            <div className="container" />
          </div>
        </section>
      </div>
    </div>
  );
}
