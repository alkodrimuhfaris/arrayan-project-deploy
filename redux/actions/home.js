// import qs from 'qs';
import services from '../../helpers/services';

export default {
  getHome: () => ({
    type: 'GET_HOME',
    payload: services().get(`/home`),
  }),
  setLoading: (x = false) => ({
    type: 'SET_LOADING',
    payload: x,
  }),
};
