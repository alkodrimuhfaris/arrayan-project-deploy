import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import actions from '../../redux/actions';
import carouselControler from '../../componentHelpers/carouselControler';
import ReadMoreBtn from './News/ReadMoreBtn';
import NavBtn from './News/NavBtn';
import SliderWrapper from './News/SliderWrapper';

export default function News() {
  const refNews = React.useRef(null);
  const refNewsCont = React.useRef(null);
  const [newsOrder, setNewsOrder] = React.useState(0);
  const dispatch = useDispatch();

  const {error: errorNews, news: newsListOri} = useSelector(
    (state) => state.newsData,
  );

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

  const classNameOuter = `container d-flex position-relative overflow-hidden ${
    !(refNewsCont.current && refNews.current)
      ? ' align-items-center justify-content-center'
      : refNewsCont.current.offsetWidth <
        refNews.current.offsetWidth * newsList.length
      ? ' align-items-center justify-content-start'
      : ' align-items-center justify-content-center'
  }`;

  const classNameInner = !(refNewsCont.current && refNews.current)
    ? 'd-none'
    : refNewsCont.current.offsetWidth <
      refNews.current.offsetWidth * newsList.length
    ? 'position-absolute w-100 h-100 news-slider-container'
    : 'd-none';

  return (
    <section id="newsArrayan" className="news">
      <section className="container text-center">
        <h1 className="title my-4 mx-auto">Berita Tentang Arrayan</h1>
      </section>

      {/* news card */}
      <div ref={refNewsCont} className={classNameOuter}>
        <div className={classNameInner}>
          {newsSlider.map((val, idx) => {
            const {Icon} = val;
            return (
              <NavBtn
                key={idx}
                Icon={Icon}
                val={val}
                changeNewsSlide={changeNewsSlide}
              />
            );
          })}
        </div>
        <SliderWrapper
          newsList={newsList}
          refNewsCont={refNewsCont}
          refNews={refNews}
          newsOrder={newsOrder}
          transition={transition}
          handleTouchEnd={handleTouchEnd}
          handleTouchMove={handleTouchMove}
          handleTouchStart={handleTouchStart}
          errorNews={errorNews}
        />
      </div>

      {!newsList.length && errorNews ? null : <ReadMoreBtn />}
    </section>
  );
}
