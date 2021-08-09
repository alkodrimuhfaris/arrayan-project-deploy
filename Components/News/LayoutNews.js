import React from 'react';
import Link from 'next/link';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../redux/actions';

export default function LayoutNews({
  slug = [],
  mainPage = false,
  footer = () => null,
  ...props
}) {
  const dispatch = useDispatch();
  const [popularArticle, setPopularArt] = React.useState([]);
  const {news} = useSelector((state) => state.dataFromGetPopularNews);
  const {tags} = useSelector((state) => state.dataFromGetTags);

  React.useEffect(() => {
    if (news.length) {
      setPopularArt((x) => {
        x = [];
        if (news.length > 5) {
          for (let i = 0; i < 5; i++) {
            x.push(news[i]);
          }
        } else {
          x = news.map((y) => y);
        }
        return x;
      });
    }
  }, [news]);

  React.useEffect(() => {
    dispatch(actions.newsActions.getPopularNews());
    dispatch(actions.newsActions.getTags());
  }, []);

  return (
    <div className="my-5 container-md">
      <div className="row no-gutters">
        <div className="col-12 order-1 order-md-1 d-flex justify-content-center align-items-center title-news-main">
          {!mainPage ? null : (
            <div className="title">
              <h1>Arrayan News & Update</h1>
            </div>
          )}
        </div>
        <div className="col-12 col-md-8 col-xl-8 order-2 order-md-2">
          {props.children}
        </div>
        <div className="col-12 col-md-4 col-xl-4 order-4 order-md-3">
          <div className="row">
            <div
              className={`col-12 mb-md-5 ${
                !mainPage ? 'order-1 order-md-2' : ''
              }`}
            >
              <div className="popular-article text-ar-dark container-lg">
                <div className="border-bottom pb-2 mb-2 border-ar-dark">
                  <h3 className="p-0 text-ar-dark">Artikel Terpopuler</h3>
                </div>
                <ul className="px-3">
                  {popularArticle.map((val, idx) => {
                    const {slug: linkSlug, title} = val;
                    return (
                      <li key={idx}>
                        <Link
                          href={{
                            pathname: '/news/read/[slug]',
                            query: {slug: linkSlug},
                          }}
                        >
                          <a className="text-ar-dark">{title}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className={`col-12 ${!mainPage ? 'order-1 order-md-2' : ''}`}>
              <div className="tags-container text-ar-dark container-lg">
                <div className="border-bottom pb-2 mb-2 border-ar-dark">
                  <h3 className="p-0 text-ar-dark">Tags</h3>
                </div>
                <section className="tags d-flex flex-wrap">
                  {tags.map((val, idx) => (
                    <Link
                      key={idx}
                      href={{
                        pathname: '/news',
                        query: {tag: val.name},
                      }}
                    >
                      <a className="borders my-1 mx-1">
                        <div>{val.name}</div>
                      </a>
                    </Link>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 order-3 order-md-4 d-flex align-items-center justify-content-center my-3 p-0">
          {footer()}
        </div>
      </div>
    </div>
  );
}
