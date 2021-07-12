import React from 'react';
import {BiCalendarAlt} from 'react-icons/bi';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';

export default function News({newsList = []}) {
  const refNews = React.useRef(null);
  const refNewsCont = React.useRef(null);
  const [newsOrder, setNewsOrder] = React.useState(0);

  const newsSlider = [
    {class: 'news-slider-left', Icon: AiOutlineArrowLeft},
    {class: 'news-slider-right', Icon: AiOutlineArrowRight},
  ];

  const changeNewsSlide = (dir) => {
    setNewsOrder((x) => {
      x = dir === 'news-slider-left' ? x - 1 : x + 1;
      x = dir === 'news-slider-left' && x < 0 ? newsList.length - 1 : x;
      x = dir === 'news-slider-right' && x > newsList.length - 1 ? 0 : x;
      return x;
    });
  };
  return (
    <section id="newsArrayan" className="news">
      <section className="container text-center">
        <h1 className="title my-4 mx-auto">Berita Tentang Arrayan</h1>
      </section>

      {/* news card */}
      <div
        ref={refNewsCont}
        className={`container d-flex position-relative overflow-hidden ${
          !(refNewsCont.current && refNews.current)
            ? ' align-items-center justify-content-center'
            : refNewsCont.current.offsetWidth <
              refNews.current.offsetWidth * newsList.length
            ? ' align-items-center justify-content-start'
            : ' align-items-center justify-content-center'
        }`}
      >
        <div
          className={
            !(refNewsCont.current && refNews.current)
              ? 'd-none'
              : refNewsCont.current.offsetWidth <
                refNews.current.offsetWidth * newsList.length
              ? 'position-absolute w-100 h-100 news-slider-container'
              : 'd-none'
          }
        >
          {newsSlider.map((val, idx) => {
            const {Icon} = val;
            return (
              <button
                onClick={() => changeNewsSlide(val.class)}
                key={idx}
                type="button"
                name={val.class}
                className={`position-absolute d-flex align-items-center justify-content-center btn ${val.class}`}
              >
                <Icon />
              </button>
            );
          })}
        </div>
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
            transition: '0.3s ease',
          }}
          className="news-card-container mb-3 position-relative"
        >
          {newsList.map((val, item) => {
            const widthNews = refNews.current ? refNews.current.offsetWidth : 0;
            const image = process.env.NEXT_PUBLIC_URL_BACKEND + val.image;
            const href = process.env.NEXT_PUBLIC_URL_BACKEND + val.href;
            return (
              <div
                key={item}
                ref={item === 0 ? refNews : null}
                style={{
                  left: `${item * widthNews}px`,
                  height: `${(widthNews * 1.1) / 0.925}px`,
                }}
                className="news-card-absolute d-flex align-items-center justify-content-center"
              >
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
                    <div className="news-date mb-3 small d-flex align-items-center text-ar-dark">
                      <div className="icon d-flex align-items-center">
                        <BiCalendarAlt />
                      </div>
                      <text>{val.date.split('T')[0]}</text>
                    </div>
                    <article className="caption fading-text mb-3 text-grey">
                      {val.title}
                    </article>
                    <div className="link-wrapper">
                      <a className="text-ar-dark" href={href}>
                        Baca Lebih Lanjut{' '}
                        <span>
                          <AiOutlineArrowRight />
                        </span>
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="button-wrapper container d-flex justify-content-center">
        <button name="open-news" type="button" className="btn-ar rounded my-4">
          Lihat Lebih Lanjut
        </button>
      </div>
    </section>
  );
}
