import Link from 'next/link';
import React from 'react';
import imageStorage from '../../helpers/imageStorage';
import timeParser from '../../helpers/timeParser';

export default function NewsCard({
  slug = '',
  image = '',
  title = '',
  shortContent = '',
  date = '',
}) {
  const [dt, setDt] = React.useState('');

  React.useEffect(() => {
    if (date) {
      setDt((x) => {
        x = timeParser(date);
        return x;
      });
    }
  }, [date]);

  return (
    <div className="list-news-ins mb-4">
      <div className="row px-3">
        <div className="col-12 list-news-card p-0">
          <div className="row no-gutters">
            <div className="col-12 col-lg-3 img-news-cont">
              <img src={imageStorage(image)} alt={`banner-${slug}`} />
            </div>
            <div className="col-12 col-lg-9">
              <div className="row no-gutters">
                <div className="col-12">
                  <h3>{title}</h3>
                </div>
                <div className="col-12">
                  <p>{shortContent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 p-0">
          <div className="row">
            <div className="col-12 offset-0 offset-md-3 col-md-9 d-flex align-items-center justify-content-between">
              <div>
                <span className="date">{dt}</span>
              </div>
              <div>
                <Link
                  href={{
                    pathname: '/news/read/[slug]',
                    query: {
                      slug,
                    },
                  }}
                >
                  <a className="link">
                    <span>Baca Selengkapnya</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
