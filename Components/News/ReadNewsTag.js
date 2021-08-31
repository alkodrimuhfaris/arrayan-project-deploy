import React from 'react';
import Link from 'next/link';
import {useSelector} from 'react-redux';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';

export default function ReadNewsTag({draft = false}) {
  const {sm} = useWindowDimensions();
  const {tags} = useSelector((state) =>
    !draft ? state.readNews : state.draftNews,
  );

  return (
    <div className={`tags-container ${sm ? 'container-lg' : ''}`}>
      <div className="border-top pt-2 mt-2 border-ar-dark">
        <h3 className="p-0 mb-1 mb-md-2 text-ar-light">Tags di artikel ini</h3>
      </div>
      <section className="tags d-flex flex-wrap">
        {tags.map((val, idx) => (
          <Link
            key={idx}
            href={{
              pathname: '/news',
              query: {tag: val},
            }}
          >
            <a className="borders my-1 mx-1">
              <div>{val.name}</div>
            </a>
          </Link>
        ))}
      </section>
    </div>
  );
}
