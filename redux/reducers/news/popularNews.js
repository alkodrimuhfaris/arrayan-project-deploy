const initialState = {
  success: false,
  error: false,
  pending: false,
  news: [],
  links: {},
  meta: {},
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'GET_NEWS_POPULAR_PENDING': {
      return {
        ...state,
        success: false,
        error: false,
        pending: true,
        message: 'Mendapatkan data...',
      };
    }
    case 'GET_NEWS_POPULAR_REJECTED': {
      return {
        ...state,
        success: false,
        error: false,
        pending: false,
        message: 'Pengambilan data gagal, silahkan muat ulang halaman',
      };
    }
    case 'GET_NEWS_POPULAR_FULFILLED': {
      return {
        ...state,
        success: true,
        error: false,
        pending: false,
        news: action.payload.data.data,
        links: action.payload.data.links,
        meta: action.payload.data.meta,
        message: 'Pengambilan data sukses!',
      };
    }
  }
};
