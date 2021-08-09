import React from 'react';
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import Layout from '../../Components/Layout';
import LayoutNews from '../../Components/News/LayoutNews';
import ListNews from '../../Components/News/ListNews';
import NewsHeader from '../../header/news';
import actions from '../../redux/actions';
import Pagination from '../../Components/Pagination';

export default function index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {page = 1} = router.query;
  const {tag} = router.query;
  const {meta, success, pending} = useSelector((state) => state.newsDataMain);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!page) {
      // get page 1
      dispatch(actions.newsActions.getNewsMain({page: 1}));
    } else if (!tag && page) {
      // get page
      dispatch(actions.newsActions.getNewsMain({page}));
    } else if (tag && !page) {
      dispatch(actions.newsActions.getNewsMain({page: 1, tag}));
    } else {
      dispatch(actions.newsActions.getNewsMain({page, tag}));
    }
  }, [page, tag]);

  React.useEffect(() => {
    if (success && Object.keys(meta).length) {
      const {current_page: currPage, last_page: lPage} = meta;
      setCurrentPage(currPage);
      setLastPage(lPage);
    }
  }, [meta, pending, success]);

  return (
    <Layout className="news" neverTransparentNavbar>
      <NewsHeader />
      <LayoutNews
        mainPage
        footer={() => (
          <div className="mt-3 my-5">
            <Pagination currentPage={currentPage} maxPage={lastPage} />
          </div>
        )}
      >
        {!tag ? null : (
          <div className="w-100 mb-3 tag-title">
            <div className="row">
              <div className="col-12">
                <h5>
                  Result for tag: <span>{tag}</span>
                </h5>
              </div>
            </div>
          </div>
        )}
        <ListNews page={page} />
      </LayoutNews>
    </Layout>
  );
}
