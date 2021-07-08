// import qs from 'qs';
import services from '../../helpers/services';

export default {
  getCarousel: () => ({
    type: 'GET_TESTIMONY',
    payload: services().get(`testimony?`),
  }),
};
