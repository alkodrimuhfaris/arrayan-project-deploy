import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BiCalendarAlt} from 'react-icons/bi';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import Link from 'next/link';
import actions from '../../redux/actions';
import imageStorage from '../../helpers/imageStorage';
import carouselControler from '../../componentHelpers/carouselControler';

export default function News() {
  const refNews = React.useRef(null);
  const refNewsCont = React.useRef(null);
  const [newsOrder, setNewsOrder] = React.useState(0);
  const dispatch = useDispatch();

  const {
    pending: pendingNews,
    error: errorNews,
    success: successNews,
    news: newsListOri,
  } = useSelector((state) => state.newsData);

  React.useEffect(() => {
    dispatch(actions.newsActions.getNews());
  }, []);

  const newsSlider = [
    {class: 'news-slider-left', Icon: AiOutlineArrowLeft},
    {class: 'news-slider-right', Icon: AiOutlineArrowRight},
  ];
  const {
    carouselArray: newsList,
    transition,
    sliderFunc: changeNewsSlide,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  } = carouselControler({
    carousel: newsListOri,
    rightDir: newsSlider[1].class,
    leftDir: newsSlider[0].class,
    infinity: false,
  });

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
            transition,
          }}
          onTouchEnd={
            !(refNewsCont.current && refNews.current)
              ? null
              : !(
                  refNewsCont.current.offsetWidth <
                  refNews.current.offsetWidth * newsList.length
                )
              ? handleTouchEnd
              : null
          }
          onTouchMove={
            !(refNewsCont.current && refNews.current)
              ? null
              : !(
                  refNewsCont.current.offsetWidth <
                  refNews.current.offsetWidth * newsList.length
                )
              ? handleTouchMove
              : null
          }
          onTouchStart={
            !(refNewsCont.current && refNews.current)
              ? null
              : !(
                  refNewsCont.current.offsetWidth <
                  refNews.current.offsetWidth * newsList.length
                )
              ? handleTouchStart
              : null
          }
          className="news-card-container mb-3 position-relative"
        >
          {!newsList.length && errorNews
            ? null
            : newsList.map((val, item) => {
                const widthNews = refNews.current
                  ? refNews.current.offsetWidth
                  : 0;
                const image = imageStorage(val.image);
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
                        <p className="news-date mb-3 small d-flex align-items-center text-ar-dark">
                          <span className="icon d-flex align-items-center">
                            <BiCalendarAlt />
                          </span>
                          <span>{val.date.split('T')[0]}</span>
                        </p>
                        <article className="caption fading-text mb-3 text-grey">
                          {val.title}
                        </article>
                        <div className="link-wrapper">
                          <Link
                            href={{
                              pathname: '/news/read/[slug]',
                              query: {slug: val.slug},
                            }}
                          >
                            <a className="text-ar-dark">
                              Baca Lebih Lanjut{' '}
                              <span>
                                <AiOutlineArrowRight />
                              </span>
                            </a>
                          </Link>
                        </div>
                      </section>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>

      {!newsList.length && errorNews ? null : (
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
      )}
    </section>
  );
}
