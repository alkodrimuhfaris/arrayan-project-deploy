// import qs from 'qs';
import services from '../../helpers/services';

export default {
  getOurProjects: () => ({
    type: 'GET_PROJECTS',
    payload: services().get(`projects?`),
  }),
};
