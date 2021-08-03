import Link from 'next/link';
import React from 'react';
import {FiChevronsRight, FiChevronsLeft} from 'react-icons/fi';

export default function Pagination({currentPage = 1, maxPage = 10}) {
  const [pages, setPages] = React.useState([1, 2, 3, 4, 5]);
  const [prevElipsis, setPrevElipsis] = React.useState(false);
  const [nextElipsis, setNextElipsis] = React.useState(false);

  React.useEffect(() => {
    if (maxPage <= 5) {
      const p = [];
      for (let i = 1; i <= maxPage; i++) {
        p.push(i);
      }
      setPages(p);
      console.log('============= 1st case');
    } else if (currentPage <= 3 && maxPage > 5) {
      setPages([1, 2, 3, 4, 5]);
      setPrevElipsis(false);
      if (maxPage > 5) {
        setNextElipsis(true);
      }
      console.log('============= 2nd case');
    } else if (maxPage - currentPage <= 2 && maxPage > 5) {
      const p = [];
      for (let i = maxPage - 4; i <= maxPage; i++) {
        p.push(i);
      }
      setPages(p);
      setNextElipsis(false);
      if (maxPage - 5 > 1) {
        setPrevElipsis(true);
      }
      console.log('============= 3rd case');
    } else {
      const p = [];
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        p.push(i);
        console.log(i);
      }
      setPages(p);
      setNextElipsis(true);
      setPrevElipsis(true);
      console.log('============= 4th case');
    }
  }, [currentPage, maxPage]);

  return (
    <section className="pagination w-100 d-flex align-items-center justify-content-center">
      {!prevElipsis ? null : (
        <span>
          <Link href={{pathname: '/news', query: {page: 1}}}>
            <a>
              <FiChevronsLeft style={{color: '#707070'}} size="1.2em" />
            </a>
          </Link>
        </span>
      )}
      {!prevElipsis ? null : <span>...</span>}
      {pages.map((val, idx) => (
        <span key={idx} className={currentPage === val ? 'current' : ''}>
          <Link href={{pathname: '/news', query: {page: val}}}>
            <a aria-disabled={currentPage === val}>
              <span>{val}</span>
            </a>
          </Link>
        </span>
      ))}
      {!nextElipsis ? null : <span>...</span>}
      {!nextElipsis ? null : (
        <span>
          <Link href={{pathname: '/news', query: {page: maxPage}}}>
            <a>
              <FiChevronsRight style={{color: '#707070'}} size="1.2em" />
            </a>
          </Link>
        </span>
      )}
    </section>
  );
}
