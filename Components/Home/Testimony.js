import React from 'react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import Testi from './Testi';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import testiImg from '../../Assets/Photos/testiImg.jpg';
import carouselControler from '../../componentHelpers/carouselControler';

export default function Testimony({testimonyList = [], testiTimer = 10}) {
  const {width, xsO, smO, md, mdO, lgO, xlO} = useWindowDimensions();
  const [refTesti, wRefTesti, hRefTesti] = getComponentWidth();
  const refTestiBlur = React.useRef(null);
  const [testiContRat, setTestiContRat] = React.useState(3.516);
  const [bgImgContRat, setBgImgContRat] = React.useState(0.942);
  const [testiWrapperRat, setTestiWrapperRat] = React.useState(3.6475);
  const [refTestiIndv, wTestiIndiv, hTestiIndiv] = getComponentWidth();
  const [refTestiWrapper, wRefTestiWrapper, hRefTestiWrapper] =
    getComponentWidth();
  const [ref2, wRef2, hRef2] = getComponentWidth();

  const testiSlider = [
    {class: 'testi-slider-left', Icon: AiOutlineArrowLeft},
    {class: 'testi-slider-right', Icon: AiOutlineArrowRight},
  ];

  const {
    carouselArray: testimonyListArr,
    carouselNum: testi,
    transition,
    sliderFunc: changeTestiSlide,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  } = carouselControler({
    carousel: testimonyList,
    transition: '0.3s ease',
    leftDir: testiSlider[0].class,
    rightDir: testiSlider[1].class,
    timer: testiTimer,
    infinity: true,
    loopNumber: 2,
    addLoop: 1,
  });

  React.useEffect(() => {
    setTestiContRat(() =>
      xsO || smO ? 1.25 : mdO ? 1.4 : lgO ? 2.2 : xlO ? 3.516 : 3.516,
    );
    setBgImgContRat(() =>
      xsO || smO || mdO ? 0.7 : lgO ? 0.7 : xlO ? 0.942 : 0.942,
    );
    setTestiWrapperRat(() =>
      xsO || smO ? 1.4 : mdO ? 1.8 : lgO ? 2.4 : xlO ? 3.6475 : 3.6475,
    );
  }, [width]);

  return (
    <section
      id="testimony"
      className="testimony position-relative overflow-hidden text-center my-lg-5 mb-0"
    >
      <section className="container">
        <h1 className="title mx-auto text-ar-dark">Testimoni Arrayan Group</h1>
        <p className="subtitle mx-auto text-grey">
          Yakin belum memiliki property dari Arrayan Group? Yul kita tanya apa
          pendapat orang yang sudah memiliki property di Arrayan Group.
        </p>
      </section>
      <div className="">
        <section
          style={{
            height: `${wRefTesti / testiContRat}px`,
            maxHeight: '500px',
            aspectRatio: xsO || smO ? 1.25 : mdO ? 1.4 : lgO ? 2.2 : 3.516,
          }}
          className="testi-container container-lg position-relative"
          ref={refTesti}
        >
          <div
            style={{
              height: `100%`,
              width: md ? `100%` : `${hRefTesti * bgImgContRat}px`,
            }}
            className="bg-img-container position-relative"
          >
            <img src={testiImg} alt="testimony" />
            {testiSlider.map((val, idx) => {
              const {Icon} = val;
              return (
                <button
                  onClick={() => changeTestiSlide(val.class)}
                  key={idx}
                  name={val.class}
                  type="button"
                  className={`position-absolute d-flex align-items-center justify-content-center btn ${val.class}`}
                >
                  <Icon />
                </button>
              );
            })}
          </div>
          <article
            style={{
              width:
                xsO || smO ? `100%` : mdO ? `100%` : lgO || xlO ? `83%` : `83%`,
              height: `${wRefTesti / testiWrapperRat}px`,
            }}
            ref={refTestiWrapper}
            className="testi-wrapper"
          >
            <div
              style={{
                width: md ? '100%' : `${2 * wTestiIndiv}px`,
              }}
              className="testi-inside-wrapper"
            >
              <div
                className="testi-blur-left"
                style={{
                  width: md
                    ? `${wTestiIndiv / 4}px` // dibagi 4 karena panjangnya hanya seperempat
                    : '0%',
                }}
              />
              <div
                className="testi-blur-right"
                style={{
                  width: md
                    ? `${wTestiIndiv / 4}px` // dibagi 4 karena panjangnya hanya seperempat
                    : `${wRefTestiWrapper - 2 * wTestiIndiv}px`,
                }}
                ref={refTestiBlur}
              />

              <div
                className="w-100 h-100 testi-tracker position-relative"
                style={{
                  transform: `translate(-${testi * wTestiIndiv}px, 0px)`,
                  transition,
                }}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                ref={ref2}
              >
                {testimonyListArr.map((val, idx) => {
                  const firstRef = idx === 0 ? refTestiIndv : null;
                  const left = md
                    ? `${wTestiIndiv / 4 + idx * wTestiIndiv}px`
                    : `${idx * wTestiIndiv}px`;
                  return (
                    <div
                      key={idx}
                      ref={firstRef}
                      className="testi-individual h-100 position-absolute"
                      style={{
                        left,
                        width:
                          xsO || smO || mdO
                            ? `calc(100%/1.5)`
                            : lgO
                            ? `${hRef2 * 1.453}px`
                            : xlO
                            ? `${hRef2 * 1.2}px`
                            : `${hRef2 * 1.453}px`,
                        height: `${hRef2}px`,
                      }}
                    >
                      <Testi
                        name={val.project}
                        comment={val.description}
                        rating={val.rating}
                        bp={md}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
