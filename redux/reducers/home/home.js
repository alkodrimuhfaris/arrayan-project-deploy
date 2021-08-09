const initialState = {
  success: false,
  error: false,
  pending: false,
  sliders: [],
  testimonials: [],
  projects: [],
  message: '',
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'GET_HOME_PENDING': {
      return {
        ...state,
        success: false,
        error: false,
        pending: true,
        message: 'Mendapatkan data...',
      };
    }
    case 'GET_HOME_REJECTED': {
      return {
        ...state,
        success: false,
        error: false,
        pending: false,
        message: 'Pengambilan data gagal, silahkan muat ulang halaman',
      };
    }
    case 'GET_HOME_FULFILLED': {
      const {sliders, testimonials, projects} = action.payload.data.data;
      return {
        ...state,
        success: true,
        error: false,
        pending: false,
        sliders,
        testimonials,
        projects,
        message: 'Pengambilan data sukses!',
      };
    }
    case 'SET_LOADING': {
      return {
        ...state,
        loading: action.payload,
      };
    }
  }
};
