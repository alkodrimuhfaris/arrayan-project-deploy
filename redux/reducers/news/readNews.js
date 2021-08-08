const initialState = {
  success: false,
  error: false,
  pending: false,
  id: 0,
  slug: '',
  title: '',
  shortContent: '',
  content: '',
  image: '',
  date: '',
  href: '',
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'GET_NEWS_SLUG_PENDING': {
      return {
        ...state,
        success: false,
        error: false,
        pending: true,
        message: 'Mendapatkan data...',
      };
    }
    case 'GET_NEWS_SLUG_REJECTED': {
      return {
        ...state,
        success: false,
        error: false,
        pending: false,
        message: 'Pengambilan data gagal, silahkan muat ulang halaman',
      };
    }
    case 'GET_NEWS_SLUG_FULFILLED': {
      const {
        id,
        slug,
        title,
        short_content: shortContent,
        content,
        image,
        date,
        href,
      } = action.payload.data.data;
      return {
        ...state,
        success: true,
        error: false,
        pending: false,
        id,
        slug,
        title,
        shortContent,
        content,
        image,
        date,
        href,
        message: 'Pengambilan data sukses!',
      };
    }
  }
};
