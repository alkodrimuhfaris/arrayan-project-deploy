// import qs from 'qs';
import services from '../../helpers/services';

export default {
  getProjects: (slug = '') => ({
    type: 'GET_PROJECT_SLUG',
    payload: services().get(`/project/${slug}`),
  }),
  setAspectRatio: (aspectRatio) => ({
    type: 'SET_ASPECT_RATIO',
    payload: aspectRatio,
  }),
};
