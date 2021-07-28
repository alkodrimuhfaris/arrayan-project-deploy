import React from 'react';

export default function SubProjectDesc({title = '', area = '', specs = ''}) {
  React.useEffect(() => {
    console.log(title);
    console.log(area);
    console.log(specs);
  }, []);
  return (
    <article className="subproject-desc container">
      <div className="row">
        <div className="col-12 subproject-title">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-12 subproject-area">
          <h3>Area Rumah</h3>
          <ul>
            {area.map((val, idx) => {
              const {value} = val;
              return <li key={idx}>{value}</li>;
            })}
          </ul>
        </div>
        <div className="col-6 col-md-12 subproject-spec">
          <h3>Spesifikasi</h3>
          <ul>
            {specs.map((val, idx) => {
              const {value} = val;
              return <li key={idx}>{value}</li>;
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}
