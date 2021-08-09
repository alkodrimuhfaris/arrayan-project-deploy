import React from 'react';
import {useRouter} from 'next/router';
import {FaHeadset} from 'react-icons/fa';
import Link from 'next/link';
import arrayanIcon from '../Assets/Icons/arrayanIcon.svg';
import getComponentWidth from '../componentHelpers/getComponentWidth';
import callCenter from '../Assets/Icons/Call_Center.svg';

export default function Navbar({
  open = false,
  visTopHeader = false,
  neverTransparentBG = false,
  cpNumber = '021-2250-4920',
  setOpen = () => {},
  refNavBar = {current: null},
}) {
  const [ref1, w1, hRef1] = getComponentWidth();
  const [ref2, w2, hRef2] = getComponentWidth();
  const router = useRouter();
  const {jump} = router.query;

  React.useEffect(() => {
    if (jump !== '#') {
      setOpen(false);
    }
  }, [jump]);

  return (
    <div ref={refNavBar} className="navbar-ar-cont">
      <div
        ref={ref1}
        className={`navbar-ar text-light ${
          !(visTopHeader || open) || (neverTransparentBG && !open)
            ? 'change-bg shadow'
            : ''
        } ${open ? 'close' : ''}`}
      >
        <div className="container h-100 d-flex align-items-center justify-content-between">
          <div className="navbar-left container d-flex w-83 position-relative">
            <Link href={{pathname: '/'}}>
              <div
                className="logo"
                style={{
                  height: `1.5em`,
                  width: `calc(1.5em * 4.51)`,
                  cursor: 'pointer',
                }}
              >
                <img src={arrayanIcon} alt="icon-arrayan" />
              </div>
            </Link>
            <div className="contact">
              <a
                ref={ref2}
                // style={{aspectRatio: 4.51, width: `${hRef2 * 4.51}px`}}
                className="contact-button text-decoration-none text-white"
                href={`tel:${cpNumber}`}
              >
                <img src={callCenter} alt="call-center-arrayan" />
                {/* <div className="text-small">
                  <p>
                    <span>
                      <FaHeadset />
                    </span>{' '}
                    call centre
                  </p>
                </div>
                {cpNumber} */}
              </a>
            </div>
          </div>
          <div
            className={`w-17 d-flex justify-content-right position-relative ${
              open ? 'open' : ''
            }`}
          >
            <Link href={{query: {jump: '#'}}}>
              <button
                onClick={() => {
                  setOpen((x) => !x);
                }}
                type="button"
                name="open-menu-btn"
                className={`menu-toggle ${
                  !visTopHeader || neverTransparentBG ? 'change-color' : ''
                }`}
              >
                &nbsp;
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
