import React from 'react';
import Link from 'next/link';
import ReadMoreCard from './ReadMoreCard';

export default function LinkWrapper({val}) {
  return (
    <div className="link-wrapper">
      <Link
        href={{
          pathname: '/news/read/[slug]',
          query: {slug: val.slug},
        }}
      >
        <ReadMoreCard />
      </Link>
    </div>
  );
}
