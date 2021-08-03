import React from 'react';
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import NewsCard from './NewsCard';

export default function ListNews({page}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    pending: pendingNews,
    error: errorNews,
    success: successNews,
    news: newsList,
  } = useSelector((state) => state.newsDataMain);

  return (
    <section className="list-news w-100">
      <div className="row">
        {newsList.map((val, idx) => {
          const {
            short_content: shortContent,
            title,
            slug,
            image,
            date,
            href,
          } = val;
          return (
            <div className="col-12" key={idx}>
              <NewsCard
                shortContent={shortContent}
                title={title}
                slug={slug}
                image={image}
                date={date}
                href={href}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
