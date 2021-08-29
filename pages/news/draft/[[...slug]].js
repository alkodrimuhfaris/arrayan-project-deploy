import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import Layout from '../../../Components/Layout';
import LayoutNews from '../../../Components/News/LayoutNews';
import NewsReadHeader from '../../../header/newsRead';
import actions from '../../../redux/actions';
import imageStorage from '../../../helpers/imageStorage';
import ReadNews from '../../../Components/News/ReadNews';
import ReadNewsTag from '../../../Components/News/ReadNewsTag';

export default function news() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [image, setImage] = React.useState('');
  const {slug} = router.query;
  const {
    title,
    shortDescription,
    image: img,
  } = useSelector((state) => state.draftNews);

  React.useEffect(() => {
    if (img) {
      setImage((x) => {
        x = imageStorage(img);
        return x;
      });
    }
  }, [img]);

  React.useEffect(() => {
    if (slug) {
      const linkSlug = slug[0];
      dispatch(actions.newsActions.getNewsDraft(linkSlug));
    }
  }, [slug]);

  return (
    <Layout className="news" neverTransparentNavbar>
      <NewsReadHeader
        title={title}
        description={shortDescription}
        image={image}
      />
      <LayoutNews
        footer={() => (
          <div className="mt-3 my-5 w-100">
            <ReadNewsTag />
          </div>
        )}
      >
        <ReadNews />
      </LayoutNews>
    </Layout>
  );
}
