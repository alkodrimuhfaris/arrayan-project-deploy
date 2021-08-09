const initialState = {
  success: false,
  pending: false,
  error: false,
  tags: ['Berita', 'arrayaran', 'Properti'],
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'GET_TAGS_PENDING': {
      return {
        ...state,
        success: false,
        error: false,
        pending: true,
        message: 'Mendapatkan data...',
      };
    }
    case 'GET_TAGS_REJECTED': {
      return {
        ...state,
        success: false,
        error: true,
        pending: false,
        message: 'Mendapatkan data...',
      };
    }
    case 'GET_TAGS_FULFILLED': {
      return {
        ...state,
        success: true,
        error: false,
        pending: false,
        tags: action.payload.data.data,
        message: 'Mendapatkan data...',
      };
    }
  }
};
