import React from 'react';
import useWindowDimensions from '../../helpers/getWindowDimensions';
import useAspectRatio from '../../helpers/useAspectRatio';

export default function Projects({projectList = []}) {
  const {sm, md, lg, xl} = useWindowDimensions();
  const [imgContWH, setImgConWH] = React.useState({
    width: '100%',
    height: '100%',
  });
  const [projectWrapperWH, setProjectWrapperWH] = React.useState({
    width: '100%',
    height: '100%',
  });
  const [mainImgWH, setMainImgWH] = React.useState({
    width: '100%',
    height: '100%',
  });
  const p = React.useRef(null);
  const pwWH = useAspectRatio({
    ref: p,
    wrGlobal: 1,
    wRmd: 1,
    aRmd: 1,
    wRsm: 1,
    aRsm: 1,
  });
  const pw = React.useRef(null);
  const icWH = useAspectRatio({
    ref: pw,
    wrGlobal: 1,
    wRxl: 0.606,
    aRxl: 1.902,
    wRlg: 0.606,
    aRlg: 1.902,
  });
  const mainImg = useAspectRatio({
    ref: pw,
    wrGlobal: 1,
    wRxl: 0.5462,
    aRxl: 2.087,
    wRlg: 0.5462,
    aRlg: 2.087,
  });

  React.useEffect(() => {
    setProjectWrapperWH({
      width: sm || md ? pwWH.width : '100%',
      height: sm || md ? pwWH.height : '100%',
    });
    setImgConWH({
      width: lg || xl ? icWH.width : '100%',
      height: lg || xl ? icWH.height : '100%',
    });
    setMainImgWH({
      width: lg || xl ? mainImg.width : '100%',
      height: lg || xl ? mainImg.height : '100%',
    });
  }, [icWH, pwWH, sm, md, lg, xl]);

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
              <div
                key={idx}
                className="col-12 col-md-6 col-lg-12 col-xl-12 m-0 p-0"
              >
                <article
                  ref={idx === 0 ? pw : null}
                  style={sm || md ? {...pwWH} : {}}
                  className={`project-wrapper w-100 ${even ? 'even' : 'odd'}`}
                >
                  <div
                    style={lg || xl ? {...imgContWH} : {}}
                    className="project-img-container"
                  >
                    <img
                      className={`img-main ${
                        even ? 'img-main-even' : 'img-main-odd'
                      }`}
                      style={lg || xl ? {...mainImg} : {}}
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
