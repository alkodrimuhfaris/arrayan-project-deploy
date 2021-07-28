import React from 'react';

export default function ProjectHighligt() {
  const [highlight, setHighlight] = React.useState([
    {title: 'Hectares', content: '3 Ha'},
    {title: 'Ruang Hijau', content: '1000m', sup: '2'},
    {title: 'Unit Rumah', content: '3.500'},
    {title: 'Ruko', content: '300'},
    {title: 'Stasiun', content: '3 menit'},
    {title: 'Terminal', content: '2 menit'},
    {title: 'Pusat Kota & Mall', content: '5 menit'},
    {title: 'Rumah Sakit', content: '8 menit'},
  ]);
  return (
    <section className="project-highlight my-3 container text-center">
      <section className="row no-gutters">
        {highlight.map((val, index) => (
          <div key={index} className="p-2 p-md-4 col-6 col-md-3">
            <div className="d-flex justify-content-center align-items-center">
              <article className="highlight d-flex flex-column align-items-center justify-content-center">
                <h1 className="m-0 title">{val.title}</h1>
                {val.sup ? (
                  <p className="m-0 subtitle">
                    {val.content}
                    <sup>{val.sup}</sup>
                  </p>
                ) : (
                  <p className="m-0 subtitle">{val.content}</p>
                )}
              </article>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
