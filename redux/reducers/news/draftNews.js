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
  tags: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'GET_NEWS_DRAFT_PENDING': {
      return {
        ...state,
        success: false,
        error: false,
        pending: true,
        message: 'Mendapatkan data...',
      };
    }
    case 'GET_NEWS_DRAFT_REJECTED': {
      return {
        ...state,
        success: false,
        error: false,
        pending: false,
        message: 'Pengambilan data gagal, silahkan muat ulang halaman',
      };
    }
    case 'GET_NEWS_DRAFT_FULFILLED': {
      const {
        id,
        slug,
        title,
        short_content: shortContent,
        content,
        image,
        date,
        href,
        tags,
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
        tags,
        message: 'Pengambilan data sukses!',
      };
    }
  }
};
