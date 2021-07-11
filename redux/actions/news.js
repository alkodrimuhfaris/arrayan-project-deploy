// import qs from 'qs';
import services from '../../helpers/services';

export default {
  getNews: () => ({
    type: 'GET_NEWS',
    payload: services().get(`/article`),
  }),
};
