const initialState = {
  success: false,
  error: false,
  pending: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'POST_REGISTRATION_PENDING': {
      return {
        ...state,
        success: false,
        error: false,
        pending: true,
        message: 'Mengirim form...',
      };
    }
    case 'POST_REGISTRATION_REJECTED': {
      return {
        ...state,
        success: false,
        error: true,
        pending: false,
        message: 'Ada sedikit kesalahan, silahkan coba lagi',
      };
    }
    case 'POST_REGISTRATION_FULFILLED': {
      return {
        ...state,
        success: true,
        error: false,
        pending: false,
        message:
          'Form anda telah terkirim! Tim kami akan segera menghubungi anda',
      };
    }
    case 'CLEAR_REGISTRATION_NOTIF': {
      return {
        ...state,
        ...initialState,
      };
    }
  }
};
