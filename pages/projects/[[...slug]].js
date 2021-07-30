import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import Layout from '../../Components/Layout';
import actions from '../../redux/actions';
import Banner from '../../Components/Projects/Banner';
import ProjectHighligt from '../../Components/Projects/ProjectHighligt';
import ProjectGallery from '../../Components/Projects/ProjectGallery';
import SubProject from '../../Components/Projects/SubProject';
import imageStorage from '../../helpers/imageStorage';
import Header from '../../header/projects';

export default function projects() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {slug} = router.query;
  const {image, title, description} = useSelector((state) => state.projectData);
  const [img, setImg] = React.useState('');

  React.useEffect(() => {
    if (image) {
      const src = imageStorage(image);
      setImg(src);
    }
  }, [image]);

  React.useEffect(() => {
    if (slug) {
      const linkSlug = slug[0];
      dispatch(actions.projectActions.getProjects(linkSlug));
    }
  }, [slug]);

  return (
    <Layout className="projects" neverTransparentNavbar>
      <Header title={title} image={img} description={description} />
      <Banner />
      <ProjectHighligt />
      <ProjectGallery />
      <SubProject />
    </Layout>
  );
}
