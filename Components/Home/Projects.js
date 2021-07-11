import React from 'react';

export default function Projects({projectList = []}) {
  return (
    <section id="ourProject" className="projects my-5">
      <article className="container mb-4 text-ar-dark text-center">
        <h1 className="title">Our Project</h1>
      </article>
      <article className="project container">
        <div className="row no-gutters">
          {projectList.map((val, idx) => {
            const a = idx + 1;
            const even = a % 2 === 0;
            return (
              <div className="col-12 col-md-6 col-lg-12 col-xl-12 m-0 p-0">
                <article
                  className={`project-wrapper w-100 ${even ? 'even' : 'odd'}`}
                >
                  <div className="project-img-container">
                    <img
                      className={`img-main ${
                        even ? 'img-main-even' : 'img-main-odd'
                      }`}
                      src={val.picture}
                      alt={`project-${idx}`}
                    />
                    <img
                      className={`img-behind ${
                        even ? 'img-behind-even' : 'img-behind-odd'
                      }`}
                      src={val.picture}
                      alt={`project-${idx}`}
                    />
                  </div>
                  <div
                    className={`project-desc-wrapper ${even ? 'even' : 'odd'}`}
                  >
                    <h2 className="project-title">{val.project}</h2>
                    <p className={`project-desc ${even ? 'even' : 'odd'}`}>
                      {val.description}
                    </p>
                    <a className="project-btn" href={val.link}>
                      Info lebih lanjut
                    </a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
}
