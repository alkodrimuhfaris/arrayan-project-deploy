import React from 'react';
import Link from 'next/link';

export default function Menu({open = false}) {
  return (
    <div className={open ? 'open' : ''}>
      <nav>
        <ul className="menu">
          <Link
            href={{
              pathname: '/',
              query: {jump: 'projects'},
            }}
          >
            <li data-text="Projects">
              <a className="text-decoration-none text-white" href="#ourProject">
                Projects
              </a>
            </li>
          </Link>
          <Link
            href={{
              pathname: '/',
              query: {jump: 'testimony'},
            }}
          >
            <li data-text="Testimony">
              <a className="text-decoration-none text-white" href="#testimony">
                Testimony
              </a>
            </li>
          </Link>
          <Link
            href={{
              query: {jump: 'contact'},
            }}
          >
            <li data-text="Contact">
              <a
                className="text-decoration-none text-white"
                href="#formContact"
              >
                Contact
              </a>
            </li>
          </Link>
          <Link
            href={{
              pathname: '/news',
              query: {jump: 'news'},
            }}
          >
            <li data-text="News">
              <a
                className="text-decoration-none text-white"
                href="#newsArrayan"
              >
                News
              </a>
            </li>
          </Link>
          <Link
            href={{
              pathname: '/about-us',
              query: {jump: 'about-us'},
            }}
          >
            <li data-text="About Us">
              <a
                className="text-decoration-none text-white"
                href="#newsArrayan"
              >
                About Us
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
