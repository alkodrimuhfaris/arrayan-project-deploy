import React from 'react';
import {useDispatch} from 'react-redux';
import {useRouter} from 'next/router';
import Layout from '../../Components/Layout';
import actions from '../../redux/actions';
import Banner from '../../Components/Projects/Banner';
import ProjectHighligt from '../../Components/Projects/ProjectHighligt';
import ProjectGallery from '../../Components/Projects/ProjectGallery';
import SubProject from '../../Components/Projects/SubProject';

export default function projects() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {slug} = router.query;

  React.useEffect(() => {
    if (slug) {
      const linkSlug = slug[0];
      dispatch(actions.projectActions.getProjects(linkSlug));
    }
  }, [slug]);

  return (
    <Layout className="projects" neverTransparentNavbar>
      <Banner />
      <ProjectHighligt />
      <ProjectGallery />
      <SubProject />
    </Layout>
  );
}
