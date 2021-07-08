// import qs from 'qs';
import services from '../../helpers/services';

export default {
  getCarousel: () => ({
    type: 'GET_NEWS',
    payload: services().get(`news?`),
  }),
};
