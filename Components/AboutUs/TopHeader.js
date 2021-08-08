import React from 'react';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';
import abtUs from '../../Assets/Photos/abtUs.jpg';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import integrity from '../../Assets/AboutUsIcon/integrity.svg';
import goodGovernance from '../../Assets/AboutUsIcon/good-governance.svg';
import commitment from '../../Assets/AboutUsIcon/commitment.svg';
import trustworthy from '../../Assets/AboutUsIcon/trustworthy.svg';
import positive from '../../Assets/AboutUsIcon/positive-and-attitude.svg';

export default function TopHeader() {
  const {md, sm, xs} = useWindowDimensions();
  const [ref1, wRef1, hRef1] = getComponentWidth();
  const [ref2, wRef2, hRef2] = getComponentWidth();
  const [ref3, wRef3, hRef3] = getComponentWidth();
  const [ref4, wRef4, hRef4] = getComponentWidth();
  const [ref5, wRef5, hRef5] = getComponentWidth();
  const [ref6, wRef6, hRef6] = getComponentWidth();

  return (
    <div
      ref={ref1}
      style={{
        height: xs
          ? `${wRef1 / 0.75}px`
          : sm
          ? `${wRef1 / 0.9}px`
          : md
          ? `${wRef1 / 1}px`
          : `${wRef1 / 2.4}px`,
      }}
      className="top-header w-100 position-relative"
    >
      <img src={abtUs} alt="about-us-header" />
      <div className="position-absolute header-cont w-100">
        <div className="emblem-container position-relative w-100">
          <div className="row">
            <div className="col-12 title d-flex align-items-center justify-content-center">
              <h1>OUR VALUE</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 offset-lg-1 offset-1 col-5 p-2 d-flex align-items-center justify-content-center">
              <div
                ref={ref2}
                style={{
                  height: `${wRef2 / 2}px`,
                }}
                className="emblem-cont flex-column"
              >
                <div className="emblem">
                  <div className="img-emblem-cont">
                    <img src={integrity} alt="integrity-emblem" />
                  </div>
                  <div className="emblem-title-cont">
                    <h3>Integrity</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-5 p-2 d-flex align-items-center justify-content-center">
              <div
                ref={ref3}
                style={{
                  height: `${wRef3 / 2}px`,
                }}
                className="emblem-cont flex-column"
              >
                <div className="emblem">
                  <div className="img-emblem-cont">
                    <img src={goodGovernance} alt="integrity-emblem" />
                  </div>
                  <div className="emblem-title-cont">
                    <h3>
                      Good
                      <br />
                      Governance
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 offset-1 offset-lg-0 col-5 p-2 d-flex align-items-center justify-content-center">
              <div
                ref={ref4}
                style={{
                  height: `${wRef4 / 2}px`,
                }}
                className="emblem-cont flex-column"
              >
                <div className="emblem">
                  <div className="img-emblem-cont">
                    <img src={commitment} alt="integrity-emblem" />
                  </div>
                  <div className="emblem-title-cont">
                    <h3>Commitment</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-5 p-2 d-flex align-items-center justify-content-center">
              <div
                ref={ref5}
                style={{
                  height: `${wRef5 / 2}px`,
                }}
                className="emblem-cont flex-column"
              >
                <div className="emblem">
                  <div className="img-emblem-cont">
                    <img src={trustworthy} alt="integrity-emblem" />
                  </div>
                  <div className="emblem-title-cont">
                    <h3>Trustworthy</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-0 col-12 p-2 d-flex align-items-center justify-content-center">
              <div
                ref={ref6}
                style={{
                  width: `${wRef2}px`,
                  height: `${wRef2 / 2}px`,
                }}
                className="emblem-cont flex-column"
              >
                <div className="emblem">
                  <div className="img-emblem-cont">
                    <img src={positive} alt="integrity-emblem" />
                  </div>
                  <div className="emblem-title-cont">
                    <h3>
                      Positive Mind
                      <br />
                      And Attitude
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
