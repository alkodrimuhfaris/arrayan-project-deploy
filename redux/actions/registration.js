import qs from 'qs';
import services from '../../helpers/services';

export default {
  postRegistration: (data = {}) => ({
    type: 'POST_REGISTRATION',
    payload: services().post('registrations', qs.stringify(data)),
  }),
  clearNotifRegistration: () => ({
    type: 'CLEAR_REGISTRATION_NOTIF',
  }),
};
