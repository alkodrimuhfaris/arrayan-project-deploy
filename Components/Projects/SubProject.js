import React from 'react';
import {useSelector} from 'react-redux';
import SubProjectDesc from './SubProjectDesc';
import SubProjectImage from './SubProjectImage';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';

export default function SubProject() {
  const {subProjects} = useSelector((state) => state.projectData);
  const {sm} = useWindowDimensions();

  return !subProjects.length ? null : (
    <section className="sub-projects my-3">
      {subProjects.map((val, idx) => {
        const {title, area, specs, images} = val;
        return (
          <article className="container-md px-0">
            <div key={idx} className="row no-gutters px-0 my-2">
              {sm ? (
                <div className="col-12 order-1 order-md-2 col-md-6 subproject-title float-left">
                  <h1>{title}</h1>
                </div>
              ) : null}
              <div className="col-12 order-2 order-md-1 col-md-6 float-left">
                <SubProjectImage images={images} />
              </div>
              <div className="col-12 order-3 order-md-3 mt-sm-3 mt-md-0 col-md-6 float-left">
                <SubProjectDesc title={title} specs={specs} area={area} />
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
