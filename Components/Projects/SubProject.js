import React from 'react';
import {useSelector} from 'react-redux';
import SubProjectDesc from './SubProjectDesc';
import SubProjectImage from './SubProjectImage';

export default function SubProject() {
  const {subProjects} = useSelector((state) => state.projectData);
  return !subProjects.length ? null : (
    <section className="sub-projects my-3">
      {subProjects.map((val, idx) => {
        const {title, area, specs, images} = val;
        return (
          <div className="container-md px-0">
            <div key={idx} className="row no-gutters px-0 my-2">
              <div className="col-12 col-md-6">
                <SubProjectImage images={images} />
              </div>
              <div className="col-12 col-md-6">
                <SubProjectDesc title={title} specs={specs} area={area} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
