import React from 'react';
import imageStorage from '../../../helpers/imageStorage';
import NewsCard from './NewsCard';

export default function SliderWrapper({
  newsList,
  refNewsCont,
  refNews,
  newsOrder,
  transition,
  handleTouchEnd,
  handleTouchMove,
  handleTouchStart,
  errorNews,
}) {
  const onTouchEnd =
    refNewsCont.current && refNews.current
      ? null
      : !(
          refNewsCont.current.offsetWidth <
          refNews.current.offsetWidth * newsList.length
        )
      ? null
      : handleTouchEnd;
  const onTouchMove = !(refNewsCont.current && refNews.current)
    ? null
    : !(
        refNewsCont.current.offsetWidth <
        refNews.current.offsetWidth * newsList.length
      )
    ? null
    : handleTouchMove;

  const onTouchStart = !(refNewsCont.current && refNews.current)
    ? null
    : !(
        refNewsCont.current.offsetWidth <
        refNews.current.offsetWidth * newsList.length
      )
    ? null
    : handleTouchStart;

  return (
    <div
      style={{
        width: refNews.current
          ? `${refNews.current.offsetWidth * newsList.length}px`
          : '0px',
        transform: !(refNewsCont.current && refNews.current)
          ? 'translate(0%, 0%)'
          : !(
              refNewsCont.current.offsetWidth <
              refNews.current.offsetWidth * newsList.length
            )
          ? 'translate(0%, 0%)'
          : `translate(-${refNews.current.offsetWidth * newsOrder}px, 0px)`,
        transition,
      }}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
      className="news-card-container mb-3 position-relative"
    >
      {!newsList.length && errorNews
        ? null
        : newsList.map((val, item) => {
            const widthNews = refNews.current ? refNews.current.offsetWidth : 0;
            const image = imageStorage(val.image);
            return (
              <NewsCard
                val={val}
                item={item}
                refNews={refNews}
                widthNews={widthNews}
                image={image}
              />
            );
          })}
    </div>
  );
}
