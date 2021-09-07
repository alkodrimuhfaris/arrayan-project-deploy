import React from 'react';
import Link from 'next/link';
import {menu} from '../lib/dto';

export default function Menu({open = false}) {
  return (
    <div className={open ? 'open' : ''}>
      <nav>
        <ul className="menu">
          {menu.map((val, idx) => (
            <Link key={idx} href={val.linkHref}>
              <li data-text={val.name}>
                <a className="text-decoration-none text-white" href={val.href}>
                  {val.name}
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
