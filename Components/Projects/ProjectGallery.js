import React from 'react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import {useSelector} from 'react-redux';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import ProjectGalleryPhoto from './ProjectGalleryPhoto';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';

export default function ProjectGallery() {
  const [carousel, setCarousel] = React.useState(0);
  const {subTitleProject} = useSelector((state) => state.projectData);
  const [ref1, wref1, href1] = getComponentWidth();
  const [ref2, wref2, href2] = getComponentWidth();
  const [ref3, wref3, href3] = getComponentWidth();
  const [sliderInside, setSliderInside] = React.useState(false);
  const [wPhoto, setWPhoto] = React.useState(0);
  const {width, xsO, smO, mdO, lgO, xlO} = useWindowDimensions();
  const [hideBtn, setHideBtn] = React.useState(false);
  const [subTitleExist, setSubTitleExist] = React.useState(false);

  const slider = [
    {class: 'left', Icon: AiOutlineArrowLeft},
    {class: 'right', Icon: AiOutlineArrowRight},
  ];

  const sliderGallery = (dir) => {
    setCarousel((x) => {
      x = dir === 'left' ? x - 1 : x + 1;
      x = dir === 'left' && x < 0 ? subTitleProject.length - 1 : x;
      x = dir === 'right' && x > subTitleProject.length - 1 ? 0 : x;
      return x;
    });
  };

  React.useEffect(() => {
    if (ref1.current && ref2.current) {
      setSliderInside(wref1 > wref3 + 100);
      setCarousel(0);
    }
  }, [ref1, ref2, wref1, wref2]);

  React.useEffect(() => {
    const widthPhoto =
      smO || xsO
        ? wref3
        : mdO
        ? wref3 / 2
        : lgO
        ? wref3 / 3
        : xlO
        ? wref3 / 4
        : wref3 / 4;
    setWPhoto(widthPhoto);
  }, [width]);

  React.useEffect(() => {
    setHideBtn(() => wref3 >= subTitleProject.length * wPhoto);
  }, [subTitleProject, wref3, wPhoto]);

  React.useEffect(() => {
    if (subTitleProject.length) {
      setSubTitleExist(true);
    }
  }, [subTitleProject]);

  return (
    <section
      ref={ref1}
      style={{
        height: `${wref1 / 7.68}px`,
        minHeight: '200px',
      }}
      className="project-gallery-carousel mb-3 w-100"
    >
      <div ref={ref2} className="pg-carousel-container p-0 container h-100">
        {hideBtn
          ? null
          : slider.map((val, idx) => {
              const {class: cls, Icon} = val;
              return (
                <div
                  key={idx}
                  className={`pg-slider-btn-cont ${cls} slider-inside`}
                >
                  <div className="position-relative h-100 w-100">
                    <button
                      type="button"
                      onClick={() => sliderGallery(cls)}
                      className={`pg-slider-btn color-white ${cls}`}
                    >
                      <Icon />
                    </button>
                  </div>
                </div>
              );
            })}
        <div
          ref={ref3}
          style={{
            width: `${wref2 - 100}px`,
            marginLeft: '50px',
          }}
          className="pg-carousel-wrapper overflow-hidden h-100"
        >
          <div
            style={{
              transform: `translate(-${wPhoto * carousel}px)`,
              transition: '0.3s ease',
              width: '100%',
              height: `100%`,
            }}
            className="pg-carousel-tracker w-100 h-100 position-relative"
          >
            {subTitleProject.map((val, index) => {
              const idx = val + 1;
              return (
                <div
                  key={idx}
                  style={{
                    left: `${index * wPhoto}px`,
                    width: `${wPhoto}px`,
                    height: '100%',
                  }}
                  className="pg-photo-cont position-absolute"
                >
                  <ProjectGalleryPhoto src={val.subImg} text={val.subTitle} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
