const initialState = {
  success: false,
  error: false,
  pending: false,
  data: [],
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'GET_PROJECTS_PENDING': {
      return {
        ...state,
        success: false,
        error: false,
        pending: true,
        message: 'Mendapatkan data...',
      };
    }
    case 'GET_PROJECTS_REJECTED': {
      return {
        ...state,
        success: false,
        error: false,
        pending: false,
        message: 'Pengambilan data gagal, silahkan muat ulang halaman',
      };
    }
    case 'GET_PROJECTS_FULFILLED': {
      return {
        ...state,
        success: true,
        error: false,
        pending: false,
        data: action.payload.data.results,
        message: 'Pengambilan data sukses!',
      };
    }
  }
};