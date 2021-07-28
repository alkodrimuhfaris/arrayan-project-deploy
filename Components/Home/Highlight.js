import React from 'react';
import Award1 from '../../Assets/Icons/Awards-01.svg';
import Award2 from '../../Assets/Icons/Awards-02.svg';
import Award3 from '../../Assets/Icons/Awards-03.svg';
import Award4 from '../../Assets/Icons/Awards-04.svg';
import getComponentWidth from '../../componentHelpers/getComponentWidth';

export default function Highlight() {
  const highlight = [
    {title: 'Berdiri Sejak', desc: '2010'},
    {title: 'Mengelola Lahan', desc: '698 Ha'},
    {title: 'Unit Terjual', desc: '15.000'},
    {title: 'Akan Dibangun', desc: '20.000'},
  ];

  const awards = [
    {Award: Award1},
    {Award: Award2},
    {Award: Award3},
    {Award: Award4},
  ];

  const [ref1, w1, hRef1] = getComponentWidth();

  return (
    <section className="awards mb-3 mb-md-0 container text-center">
      <section className="row no-gutters">
        {highlight.map((val, index) => (
          <div key={index} className="p-2 p-md-4 col-6 col-md-3">
            <div className="d-flex justify-content-center align-items-center">
              <article className="highlight d-flex flex-column align-items-center justify-content-center">
                <h1 className="m-0 title">{val.title}</h1>
                <p className="m-0 subtitle">{val.desc}</p>
              </article>
            </div>
          </div>
        ))}
      </section>

      {/* award part */}
      <section className="row no-gutters">
        {awards.map((val, index) => {
          const {Award} = val;
          return (
            <div key={index} className="p-2 p-md-4 col-6 col-md-3">
              <div ref={index === 0 ? ref1 : null} className="w-100">
                <div
                  style={{
                    width: `${w1}px`,
                    height: `${w1 / 1.85}px`,
                  }}
                  className="award-container d-flex justify-content-center align-items-center"
                >
                  <article className="award rounded">
                    <img src={Award} alt={`awards-${index + 1}`} />
                  </article>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
