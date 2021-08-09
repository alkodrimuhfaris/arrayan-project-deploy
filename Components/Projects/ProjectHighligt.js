import React from 'react';
import hectares from '../../Assets/ProjectIcons/Area.svg';
import terminal from '../../Assets/ProjectIcons/bus.svg';
import ruko from '../../Assets/ProjectIcons/flat.svg';
import ruangH from '../../Assets/ProjectIcons/garden.svg';
import unitR from '../../Assets/ProjectIcons/home.svg';
import rS from '../../Assets/ProjectIcons/hospital.svg';
import mall from '../../Assets/ProjectIcons/mall.svg';
import stasiun from '../../Assets/ProjectIcons/train.svg';
import getComponentWidth from '../../componentHelpers/getComponentWidth';

export default function ProjectHighligt() {
  const [highlight, setHighlight] = React.useState([
    {title: 'Hectares', content: '3 Ha', src: hectares},
    {title: 'Ruang Hijau', content: '1000m', sup: '2', src: ruangH},
    {title: 'Unit Rumah', content: '3.500', src: unitR},
    {title: 'Ruko', content: '300', src: ruko},
    {title: 'Stasiun', content: '3 menit', src: stasiun},
    {title: 'Terminal', content: '2 menit', src: terminal},
    {title: 'Pusat Kota & Mall', content: '5 menit', src: mall},
    {title: 'Rumah Sakit', content: '8 menit', src: rS},
  ]);

  return (
    <section className="project-highlight my-3 container text-center">
      <section className="row">
        {highlight.map((val, index) => {
          const {src} = val;
          return (
            <div
              key={index}
              className="p-2 p-md-4 col-6 col-lg-3 col-md-6 d-flex justify-content-center align-items-center"
            >
              <article className="highlight p-2 d-flex flex-column align-items-center justify-content-center">
                <h1 className="m-0 title">{val.title}</h1>
                <div className="w-100 d-flex justify-content-center align-items-center">
                  <span>
                    <img src={src} alt={`${index}-icon`} />
                  </span>
                  {val.sup ? (
                    <p className="m-0 subtitle">
                      {val.content}
                      <sup>{val.sup}</sup>
                    </p>
                  ) : (
                    <p className="m-0 subtitle">{val.content}</p>
                  )}
                </div>
              </article>
            </div>
          );
        })}
      </section>
    </section>
  );
}
