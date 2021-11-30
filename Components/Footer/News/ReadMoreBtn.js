import React from 'react';
import Link from 'next/link';

export default function ReadMoreBtn() {
  return (
    <div className="button-wrapper container d-flex justify-content-center">
      <Link
        href={{
          pathname: '/news',
          page: 1,
        }}
      >
        <a
          name="open-news"
          className="btn-ar d-flex justify-content-center align-items-center rounded my-4"
        >
          <span>Lihat Lebih Lanjut</span>
        </a>
      </Link>
    </div>
  );
}
