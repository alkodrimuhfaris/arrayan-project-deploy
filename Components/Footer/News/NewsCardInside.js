import React from 'react';
import NewsDate from './NewsDate';
import LinkWrapper from './LinkWrapper';

export default function NewsCardInside({item, widthNews, val, image}) {
  return (
    <div key={item} className="card news-card shadow">
      <img
        className="card-img-top"
        style={{
          height: `${widthNews / 1.85}px`,
        }}
        src={image}
        alt={`caption-${item}`}
      />
      <section className="card-body container caption-container">
        <NewsDate val={val} />
        <article className="caption fading-text mb-3 text-grey">
          {val.title}
        </article>
        <LinkWrapper val={val} />
      </section>
    </div>
  );
}
