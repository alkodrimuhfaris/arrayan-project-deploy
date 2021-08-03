import React from 'react';
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
  const [topCarousel, setTopCarousel] = React.useState(0);

  React.useEffect(() => {
    let intervalID;
    if (carouselTop.length > 1) {
      intervalID = setInterval(
        () =>
          setTopCarousel((x) => {
            x = x === carouselTop.length - 1 ? 0 : x + 1;
            return x;
          }),
        topCarTimer * 1000,
      );
    }

    return () => {
      if (carouselTop.length > 1) {
        clearInterval(intervalID);
      }
    };
  }, [carouselTop]);

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
            {carouselTop.map((_, index) => {
              const setActive = index === topCarousel ? 'active' : '';
              return (
                <button
                  key={index}
                  type="button"
                  name={`dot-carousel-${index}`}
                  className={`slider-btns ar_carousel_slider_btn mx-1 ${setActive}`}
                  onClick={() => setTopCarousel(index)}
                >
                  &nbsp;
                </button>
              );
            })}
          </div>
        </div>

        {/* text container */}
        <HeaderText carouselTop={carouselTop} topCarousel={topCarousel} />

        {/* container image carousel */}
        <HeaderImg
          carouselTop={carouselTop}
          topCarousel={topCarousel}
          open={open}
          setTopCarousel={setTopCarousel}
        />
      </div>
    </div>
  );
}
