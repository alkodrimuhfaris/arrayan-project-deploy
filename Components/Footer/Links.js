import React from 'react';
import arrayanIconColor from '../../Assets/Icons/arrayanIconColor.svg';
import getComponentWidth from '../../componentHelpers/getComponentWidth';

export default function Links({
  OurLink = [],
  HeadOffice = [],
  ProjectOffice = [],
  socialMedia = [],
}) {
  const [ref1, wRef1, hRef1] = getComponentWidth();
  const [ref2, wRef2, hRef2] = getComponentWidth();
  return (
    <footer id="footerArrayan" className="footer mb-5">
      <div className="container">
        <section className="row no-gutters w-100">
          <div className="col-12 col-md-6 row justify-content-between">
            {/* footer logo */}
            <section
              ref={ref1}
              className="col-6 col-sm-6 col-md-9 col-lg-6 py-3"
            >
              <div
                ref={ref2}
                style={{
                  height: wRef1 === wRef2 ? `${wRef1 / 2}px` : '7.5em',
                }}
                className="w-100 logo-footer"
              >
                <img src={arrayanIconColor} alt="footer-logo" />
              </div>
            </section>

            {/* link */}
            <section className="footer-list col-5 col-sm-4 col-md-12 col-lg-4 col-xl-4 py-3">
              <h3 className="title">Our Link</h3>
              <ul className="list-footer">
                {OurLink.map((val, idx) => (
                  <li key={idx}>
                    <a className="footer-link" href={val.link}>
                      {val.desc}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="col-12 col-md-6 row">
            <section className="footer-list my-3 py-3 col-12 col-md-12 col-lg-6">
              <h3 className="title">Head Office</h3>
              <ul className="list-footer">
                {HeadOffice.map((val, idx) => (
                  <li key={idx}>
                    <a className="footer-link" href={val.link}>
                      {val.desc}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="footer-list my-3 py-3 col-12 col-md-12 col-lg-6">
              <h3 className="title">Project Office</h3>
              <ul className="list-footer">
                {ProjectOffice.map((val, idx) => (
                  <li key={idx}>
                    <a className="footer-link" href={val.link}>
                      {val.desc}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        <section className="row no-gutters w-100 my-4">
          <div className="col-12 col-md-6 mt-4 align-self-end order-2 order-md-1 row">
            <div className="col-12 d-flex">
              {socialMedia.map((val, idx) => {
                const {Logo} = val;
                return (
                  <a key={idx} href={val.link} className="social-media">
                    <Logo />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="col-12 col-md-6 order-1 order-md-2 row">
            <section className="footer-list col-12 col-md-12 col-lg-6">
              <h3 className="title">Contact Info</h3>
              <ul className="list-footer">
                <li>
                  <a className="footer-link" href="tel:(021) 8655 7890">
                    Phone (021) 8655 7890
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="tel:(021) 8655 7880">
                    Fax (021) 8655 7880
                  </a>
                </li>
              </ul>
            </section>

            <section className="footer-list align-self-end col-12 col-md-12 col-lg-6">
              <ul className="list-footer">
                <li>
                  <p className="footer-link">Email</p>
                </li>
                <li>
                  <a
                    className="footer-link"
                    href="mailto:mail@arrayangroup.com"
                  >
                    mail@arrayangroup.com
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </div>

      {/*  */}
      <section className="container text-center">
        <p className="text-c">© 2021 Arrayan Group</p>
      </section>
    </footer>
  );
}
