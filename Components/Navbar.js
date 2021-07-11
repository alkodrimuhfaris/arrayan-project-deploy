import React from 'react';
import {FaHeadset} from 'react-icons/fa';
import arrayanIcon from '../Assets/Icons/arrayanIcon.svg';

export default function Navbar({
  open = false,
  visTopHeader = false,
  cpNumber = '021-2250-4920',
  setOpen = () => {},
}) {
  return (
    <div className="navbar-ar-cont">
      <div
        className={`navbar-ar text-light ${
          visTopHeader || open ? '' : 'change-bg shadow'
        } ${open ? 'close' : ''}`}
      >
        <div className="container h-100 d-flex align-items-center justify-content-between">
          <div className="navbar-left container d-flex w-83 position-relative">
            <div className="logo">
              <img src={arrayanIcon} alt="icon-arrayan" />
            </div>
            <div className="contact">
              <a
                className="contact-button text-decoration-none text-white"
                href={`tel:${cpNumber}`}
              >
                <div className="text-small">
                  <text>
                    <span>
                      <FaHeadset />
                    </span>{' '}
                    Call Center
                  </text>
                </div>
                {cpNumber}
              </a>
            </div>
          </div>
          <div
            className={`w-17 d-flex justify-content-right position-relative ${
              open ? 'open' : ''
            }`}
          >
            <button
              onClick={() => {
                setOpen((x) => !x);
              }}
              type="button"
              className={`menu-toggle ${visTopHeader ? '' : 'change-color'}`}
            >
              &nbsp;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
