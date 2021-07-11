import qs from 'qs';
import services from '../../helpers/services';

export default {
  postRegistration: (data = {}) => ({
    type: 'POST_REGISTRATION',
    payload: services().post('/contact-us', data),
  }),
  clearNotifRegistration: () => ({
    type: 'CLEAR_REGISTRATION_NOTIF',
  }),
};
