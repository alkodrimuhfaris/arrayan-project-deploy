import React from 'react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import Testi from './Testi';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import testiImg from '../../Assets/Photos/testiImg.jpg';

export default function Testimony({testimonyList = [], testiTimer = 10}) {
  const {xsO, smO, md, mdO, lgO, xlO} = useWindowDimensions();
  const [testi, setTesti] = React.useState(0);
  const refTesti = React.useRef(null);
  const refTestiWrapper = React.useRef(null);
  const refTestiIndv = React.useRef(null);
  const refTestiBlur = React.useRef(null);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const [wRef1, hRef1] = getComponentWidth(ref1);
  const [wRef2, hRef2] = getComponentWidth(ref2);
  const [wRefTesti, hRefTesti] = getComponentWidth(refTesti);

  const testiSlider = [
    {class: 'testi-slider-left', Icon: AiOutlineArrowLeft},
    {class: 'testi-slider-right', Icon: AiOutlineArrowRight},
  ];

  React.useEffect(() => {
    let intervalTesti;
    if (testimonyList.length) {
      intervalTesti = setInterval(() => {
        setTesti((x) => {
          x = x === testimonyList.length - 1 ? 0 : x + 1;
          return x;
        });
      }, testiTimer * 1000);
    }

    return () => {
      if (testimonyList.length) {
        clearInterval(intervalTesti);
      }
    };
  }, [testimonyList]);

  const changeTestiSlide = (dir) => {
    setTesti((x) => {
      x = dir === 'testi-slider-left' ? x - 1 : x + 1;
      x = dir === 'testi-slider-left' && x < 0 ? testimonyList.length - 1 : x;
      x = dir === 'testi-slider-right' && x > testimonyList.length - 1 ? 0 : x;
      return x;
    });
  };

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
            height:
              xsO || smO
                ? `${wRefTesti / 1.25}px`
                : mdO
                ? `${wRefTesti / 1.4}px`
                : lgO
                ? `${wRefTesti / 2.2}px`
                : xlO
                ? `${wRefTesti / 3.516}px`
                : `${wRefTesti / 3.516}px`,
            maxHeight: '500px',
            aspectRatio: xsO || smO ? 1.25 : mdO ? 1.4 : lgO ? 2.2 : 3.516,
          }}
          className="testi-container container-lg position-relative"
          ref={refTesti}
        >
          <div
            style={{
              height: `100%`,
              width:
                xsO || smO || mdO
                  ? `100%`
                  : lgO
                  ? `${hRefTesti * 0.7}px`
                  : xlO
                  ? `${hRefTesti * 0.942}px`
                  : `${hRefTesti * 0.942}px`,
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
              height:
                xsO || smO
                  ? `${wRefTesti / 1.4}px`
                  : mdO
                  ? `${wRefTesti / 1.8}px`
                  : lgO
                  ? `${wRefTesti / 2.4}px`
                  : xlO
                  ? `${wRefTesti / 3.6475}px`
                  : `${wRefTesti / 3.6475}px`,
            }}
            ref={refTestiWrapper}
            className="testi-wrapper"
          >
            <div
              style={{
                width: md
                  ? '100%'
                  : refTestiWrapper.current && refTestiIndv.current
                  ? `${2 * refTestiIndv.current.offsetWidth}px`
                  : '100%',
              }}
              className="testi-inside-wrapper"
            >
              <div
                className="testi-blur-left"
                style={{
                  width:
                    md && refTestiWrapper.current && refTestiIndv.current
                      ? `${refTestiIndv.current.offsetWidth / 4}px` // dibagi 4 karena panjangnya hanya seperempat
                      : '0%',
                }}
              />
              <div
                className="testi-blur-right"
                style={{
                  width:
                    md && refTestiIndv.current
                      ? `${refTestiIndv.current.offsetWidth / 4}px` // dibagi 4 karena panjangnya hanya seperempat
                      : refTestiWrapper.current && refTestiIndv.current
                      ? `${
                          refTestiWrapper.current.offsetWidth -
                          2 * refTestiIndv.current.offsetWidth
                        }px`
                      : '0%',
                }}
                ref={refTestiBlur}
              />

              <div
                className="w-100 h-100 testi-tracker position-relative"
                style={{
                  transform: !refTestiIndv.current
                    ? ''
                    : md
                    ? `translate(-${
                        testi * refTestiIndv.current.offsetWidth
                      }px, 0px)`
                    : `translate(-${
                        testi * refTestiIndv.current.offsetWidth
                      }px, 0px)`,
                  transition: '0.3s ease',
                }}
                ref={ref2}
              >
                {testimonyList.map((val, idx) => {
                  const firstRef = idx === 0 ? refTestiIndv : null;
                  const widthRefTesti = refTestiIndv.current
                    ? refTestiIndv.current.offsetWidth
                    : 0;
                  // const widthRefBlur = refTestiBlur.current
                  //   ? refTestiBlur.current.offsetWidth
                  //   : 0;
                  return (
                    <div
                      key={idx}
                      ref={firstRef}
                      className="testi-individual h-100 position-absolute"
                      style={{
                        left: md
                          ? `${widthRefTesti / 4 + idx * widthRefTesti}px`
                          : `${idx * widthRefTesti}px`,
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
