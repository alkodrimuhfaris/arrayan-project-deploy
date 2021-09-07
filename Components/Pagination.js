import Link from 'next/link';
import React from 'react';
import {FiChevronsRight, FiChevronsLeft} from 'react-icons/fi';
import paginationFunction from '../helpers/paginationFunction';

export default function Pagination({currentPage = 1, maxPage = 10}) {
  const [pages, setPages] = React.useState([1, 2, 3, 4, 5]);
  const [prevElipsis, setPrevElipsis] = React.useState(false);
  const [nextElipsis, setNextElipsis] = React.useState(false);

  React.useEffect(() => {
    paginationFunction({
      maxPage,
      currentPage,
      setPages,
      setPrevElipsis,
      setNextElipsis,
    });
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
