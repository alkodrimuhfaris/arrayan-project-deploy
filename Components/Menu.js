import React from 'react';
import Link from 'next/link';

export default function Menu({open = false}) {
  return (
    <div className={open ? 'open' : ''}>
      <nav>
        <ul className="menu">
          <li data-text="Projects">
            <a className="text-decoration-none text-white" href="#ourProject">
              Projects
            </a>
          </li>
          <li data-text="Testimony">
            <a className="text-decoration-none text-white" href="#testimony">
              Testimony
            </a>
          </li>
          <li data-text="Contact">
            <a className="text-decoration-none text-white" href="#formContact">
              Contact
            </a>
          </li>
          <li data-text="News">
            <a className="text-decoration-none text-white" href="#newsArrayan">
              News
            </a>
          </li>
          <li data-text="About Us">
            <a className="text-decoration-none text-white" href="#newsArrayan">
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
