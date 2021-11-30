import React from 'react';
import NewsCardInside from './NewsCardInside';

export default function NewsCard({item, refNews, widthNews, val, image}) {
  return (
    <div
      ref={item === 0 ? refNews : null}
      style={{
        left: `${item * widthNews}px`,
        height: `${(widthNews * 1.1) / 0.925}px`,
      }}
      className="news-card-absolute d-flex align-items-center justify-content-center"
    >
      <NewsCardInside
        item={item}
        val={val}
        image={image}
        widthNews={widthNews}
      />
    </div>
  );
}
