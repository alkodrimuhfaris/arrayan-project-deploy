import React from 'react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import Testi from './Testi';
import useWindowDimensions from '../../helpers/getWindowDimensions';

export default function Testimony({
  testimonyList = [],
  testiTimer = 10,
  testiImg = '',
}) {
  const {md} = useWindowDimensions();
  const [testi, setTesti] = React.useState(0);
  const refTesti = React.useRef(null);
  const refTestiWrapper = React.useRef(null);
  const refTestiIndv = React.useRef(null);
  const refTestiBlur = React.useRef(null);

  const testiSlider = [
    {class: 'testi-slider-left', Icon: AiOutlineArrowLeft},
    {class: 'testi-slider-right', Icon: AiOutlineArrowRight},
  ];

  React.useEffect(() => {
    const intervalTesti = setInterval(
      () =>
        setTesti((x) => {
          x = x === testimonyList.length - 1 ? 0 : x + 1;
          return x;
        }),
      testiTimer * 1000,
    );

    return clearInterval(intervalTesti);
  }, []);

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
          className="testi-container container position-relative"
          ref={refTesti}
        >
          <div className="bg-img-container">
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
          <article ref={refTestiWrapper} className="testi-wrapper">
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
                  width: md
                    ? refTestiWrapper.current && refTestiIndv.current
                      ? `${refTestiIndv.current.offsetWidth / 4}px` // dibagi 4 karena panjangnya hanya seperempat
                      : '0%'
                    : '0%',
                }}
              />
              <div
                className="testi-blur-right"
                style={{
                  width: md
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
                      ref={firstRef}
                      className="testi-individual h-100 position-absolute"
                      style={{
                        left: md
                          ? `${widthRefTesti / 4 + idx * widthRefTesti}px`
                          : `${idx * widthRefTesti}px`,
                      }}
                    >
                      <Testi
                        name={val.name}
                        comment={val.testi}
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
