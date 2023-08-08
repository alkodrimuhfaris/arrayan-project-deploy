import React from 'react';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';

export default function HeaderText({carouselTop = [], topCarousel = 0}) {
  const {sm, md, lg, lgO, xl} = useWindowDimensions();
  const [refCarText, refCarW, refCarH] = getComponentWidth();

  return (
    <div className="header-text col-12 order-3 order-md-1 panel col-md-13 col-lg-10 bg-ar-dark">
      <div className="container pt-0 pt-md-5 pt-lg-0 mt-0 mt-md-5 mt-lg-0">
        <section className="col-12 col-md-12 col-lg-6 overflow-hidden">
          <div
            ref={refCarText}
            style={{
              height: sm
                ? '250px'
                : md
                ? '300px'
                : lg
                ? '520px'
                : xl
                ? '430px'
                : '400px',
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
            {carouselTop.map((val, idx) => {
              const widthCar = refCarText.current
                ? refCarText.current.offsetWidth
                : 0;
              return (
                <div
                  key={idx}
                  style={{
                    left: `${idx * widthCar}px`,
                  }}
                  className="text-carousel w-100 h-100 px-4 pb-2 position-absolute"
                >
                  <h1 className="title text-uppercase">{val.title}</h1>
                  <p className="subtitle">{val.description}</p>
                  <a
                    href={val.link}
                    target="_blank"
                    name={`get-offering-btn-${idx}`}
                    type="button"
                    className="btn btn-block"
                    rel="noreferrer"
                  >
                    Dapatkan Penawaran Menarik sekarang
                  </a>
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
