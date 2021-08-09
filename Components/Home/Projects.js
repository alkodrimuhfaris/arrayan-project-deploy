import React from 'react';
import Link from 'next/link';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';
import scrollToElement from '../../componentHelpers/scrollToElement';

export default function Projects({projectList = []}) {
  const {xsO, smO, mdO, lgO, xlO} = useWindowDimensions();
  const [ref1, ref1Width, hR1] = getComponentWidth();
  const [ref2, ref2Width, hR2] = getComponentWidth();
  const [ref3, ref3Width, hR3] = getComponentWidth();
  const {refScroll} = scrollToElement({jumpElement: 'projects'});

  return (
    <section ref={refScroll} id="ourProject" className="projects my-5">
      <article className="container mb-4 text-ar-dark text-center">
        <h1 className="title">Our Project</h1>
      </article>
      <article className="project container">
        <div className="row no-gutters">
          {projectList.map((val, idx) => {
            const a = idx + 1;
            const even = a % 2 === 0;
            const image = process.env.NEXT_PUBLIC_URL_BACKEND + val.image;
            return (
              <div
                key={idx}
                className="col-12 col-md-6 col-lg-12 col-xl-12 m-0 p-0"
              >
                <article
                  ref={idx === 0 ? ref1 : null}
                  className={`project-wrapper w-100 ${even ? 'even' : 'odd'}`}
                  style={{
                    height:
                      mdO || smO || xsO
                        ? `${ref1Width}px`
                        : lgO || xlO
                        ? 'auto'
                        : 'auto',
                  }}
                >
                  <div
                    className="project-img-container"
                    ref={idx === 0 ? ref2 : null}
                    style={{
                      height: lgO || xlO ? `${ref2Width / 1.902}px` : '100%',
                      aspectRatio: 1.902,
                    }}
                  >
                    <img
                      className={`img-main ${
                        even ? 'img-main-even' : 'img-main-odd'
                      }`}
                      ref={idx === 0 ? ref3 : null}
                      src={image}
                      alt={`project-${idx}`}
                      style={{
                        height: lgO || xlO ? `${ref3Width / 2.087}px` : '100%',
                        aspectRatio: 2.087,
                      }}
                    />
                    <img
                      className={`img-behind ${
                        even ? 'img-behind-even' : 'img-behind-odd'
                      }`}
                      src={image}
                      alt={`project-${idx}`}
                    />
                  </div>
                  <div
                    className={`project-desc-wrapper ${even ? 'even' : 'odd'}`}
                  >
                    <h2 className="project-title">{val.title}</h2>
                    <p className={`project-desc ${even ? 'even' : 'odd'}`}>
                      {val.description}
                    </p>
                    <Link href={`/projects/${val.slug}`}>
                      <a className="project-btn">Info lebih lanjut</a>
                    </Link>
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
