import React from 'react';

export default function Highlight({highlight = [], awards = []}) {
  return (
    <section className="awards mb-3 mb-md-0 container text-center">
      <section className="row no-gutters">
        {highlight.map((val, index) => (
          <div key={index} className="p-2 p-md-4 col-6 col-md-3">
            <div className="d-flex justify-content-center align-items-center">
              <article className="highlight d-flex flex-column align-items-center justify-content-center">
                <h1 className="m-0 title">{val.title}</h1>
                <text className="m-0 subtitle">{val.desc}</text>
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
              <div className="award-container d-flex justify-content-center align-items-center">
                <article className="award rounded">
                  <img src={Award} alt={`awards-${index + 1}`} />
                </article>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
