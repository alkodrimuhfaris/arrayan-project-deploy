import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import Layout from '../../Components/Layout';
import LayoutNews from '../../Components/News/LayoutNews';

export default function index() {
  const router = useRouter();
  const {slug} = router.query;
  React.useEffect(() => {
    if (slug) {
      const linkSlug = slug[0];
      // dispatch(actions.projectActions.getProjects(linkSlug));
    }
  }, [slug]);

  return (
    <Layout className="news" neverTransparentNavbar>
      <LayoutNews mainPage />
    </Layout>
  );
}
