import React from 'react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import {useSelector} from 'react-redux';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import ProjectGalleryPhoto from './ProjectGalleryPhoto';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';
import carouselControler from '../../componentHelpers/carouselControler';

export default function ProjectGallery() {
  const carouselTransition = '0.3s ease';
  const {subTitleProject: subTitleProjectReal} = useSelector(
    (state) => state.projectData,
  );
  const [ref1, wref1, href1] = getComponentWidth();
  const [ref2, wref2, href2] = getComponentWidth();
  const [ref3, wref3, href3] = getComponentWidth();
  const [wPhoto, setWPhoto] = React.useState(0);
  const {width, xsO, smO, mdO, lgO, xlO} = useWindowDimensions();
  const [hideBtn, setHideBtn] = React.useState(false);
  const [subTitleExist, setSubTitleExist] = React.useState(false);

  const slider = [
    {class: 'right', Icon: AiOutlineArrowRight},
    {class: 'left', Icon: AiOutlineArrowLeft},
  ];

  const [subTitleProject, carousel, transition, sliderGallery, DotBtn] =
    carouselControler(
      subTitleProjectReal,
      carouselTransition,
      slider[0].class,
      slider[1].class,
    );

  React.useEffect(() => {
    const widthPhoto =
      smO || xsO
        ? wref2 - 100
        : mdO
        ? (wref2 - 100) / 2
        : lgO
        ? (wref2 - 100) / 3
        : xlO
        ? (wref2 - 100) / 4
        : (wref2 - 100) / 4;
    setWPhoto(widthPhoto);
  }, [width, carousel]);

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
      className="project-gallery-carousel mb-5 w-100"
    >
      <div ref={ref2} className="pg-carousel-container p-0 container h-100">
        {!subTitleProject.length
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
              transition,
              width: '100%',
              height: `100%`,
            }}
            className="pg-carousel-tracker w-100 h-100 position-relative"
          >
            {subTitleProject.map((val, index) => {
              const idx = val + 1;
              return (
                <div
                  key={index}
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
      <div className="mb-5">
        <DotBtn />
      </div>
    </section>
  );
}
