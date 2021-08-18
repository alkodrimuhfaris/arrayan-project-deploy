import React from 'react';
import {useSelector} from 'react-redux';
import imageStorage from '../../helpers/imageStorage';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';

export default function ProjectHighligt() {
  const {projectHighlight: highlight} = useSelector(
    (state) => state.projectData,
  );
  const [ref1, wref1, href1] = getComponentWidth();
  const {md, lg, xl} = useWindowDimensions();

  return (
    <section className="project-highlight my-3 container text-center">
      <section className="row">
        {highlight.map((val, index) => {
          const {icon} = val;
          return (
            <div
              key={index}
              className="p-2 p-md-4 col-6 col-lg-3 col-md-6 d-flex justify-content-center align-items-center"
            >
              <article className="highlight pt-2">
                <div className="row">
                  <div
                    ref={index === 0 ? ref1 : null}
                    style={{
                      height: `${wref1}px`,
                    }}
                    className="col-3 p-2 position-relative"
                  >
                    <img
                      className="bg-transparent"
                      src={imageStorage(icon)}
                      alt={`${index}-icon`}
                    />
                  </div>
                  <div className="col-8 text-center">
                    <h1 className="m-0 title">{val.title}</h1>
                    <p className="m-0 subtitle">{val.subTitle}</p>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </section>
    </section>
  );
}
