// import qs from 'qs';
import qs from 'qs';
import services from '../../helpers/services';

const pages = [
  {
    current_page: 1,
    from: 1,
    last_page: 10,
    links: [
      {
        url: null,
        label: '&laquo; Sebelumnya',
        active: false,
      },
      {
        url: 'https://arrayan-engine.lihar.id/api/v1/article?page=1',
        label: 1,
        active: true,
      },
      {
        url: null,
        label: 'Selanjutnya &raquo;',
        active: false,
      },
    ],
    path: 'https://arrayan-engine.lihar.id/api/v1/article',
    per_page: 10,
    to: 1,
    total: 1,
  },
  {
    current_page: 2,
    from: 1,
    last_page: 10,
    links: [
      {
        url: null,
        label: '&laquo; Sebelumnya',
        active: false,
      },
      {
        url: 'https://arrayan-engine.lihar.id/api/v1/article?page=1',
        label: 1,
        active: true,
      },
      {
        url: null,
        label: 'Selanjutnya &raquo;',
        active: false,
      },
    ],
    path: 'https://arrayan-engine.lihar.id/api/v1/article',
    per_page: 10,
    to: 1,
    total: 1,
  },
  {
    current_page: 3,
    from: 2,
    last_page: 10,
    links: [
      {
        url: null,
        label: '&laquo; Sebelumnya',
        active: false,
      },
      {
        url: 'https://arrayan-engine.lihar.id/api/v1/article?page=1',
        label: 1,
        active: true,
      },
      {
        url: null,
        label: 'Selanjutnya &raquo;',
        active: false,
      },
    ],
    path: 'https://arrayan-engine.lihar.id/api/v1/article',
    per_page: 10,
    to: 1,
    total: 1,
  },
  {
    current_page: 4,
    from: 3,
    last_page: 10,
    links: [
      {
        url: null,
        label: '&laquo; Sebelumnya',
        active: false,
      },
      {
        url: 'https://arrayan-engine.lihar.id/api/v1/article?page=1',
        label: 1,
        active: true,
      },
      {
        url: null,
        label: 'Selanjutnya &raquo;',
        active: false,
      },
    ],
    path: 'https://arrayan-engine.lihar.id/api/v1/article',
    per_page: 10,
    to: 1,
    total: 1,
  },
  {
    current_page: 5,
    from: 4,
    last_page: 10,
    links: [
      {
        url: null,
        label: '&laquo; Sebelumnya',
        active: false,
      },
      {
        url: 'https://arrayan-engine.lihar.id/api/v1/article?page=1',
        label: 1,
        active: true,
      },
      {
        url: null,
        label: 'Selanjutnya &raquo;',
        active: false,
      },
    ],
    path: 'https://arrayan-engine.lihar.id/api/v1/article',
    per_page: 10,
    to: 1,
    total: 1,
  },
  {
    current_page: 6,
    from: 5,
    last_page: 10,
    links: [
      {
        url: null,
        label: '&laquo; Sebelumnya',
        active: false,
      },
      {
        url: 'https://arrayan-engine.lihar.id/api/v1/article?page=1',
        label: 1,
        active: true,
      },
      {
        url: null,
        label: 'Selanjutnya &raquo;',
        active: false,
      },
    ],
    path: 'https://arrayan-engine.lihar.id/api/v1/article',
    per_page: 10,
    to: 1,
    total: 1,
  },
  {
    current_page: 7,
    from: 6,
    last_page: 10,
    links: [
      {
        url: null,
        label: '&laquo; Sebelumnya',
        active: false,
      },
      {
        url: 'https://arrayan-engine.lihar.id/api/v1/article?page=1',
        label: 1,
        active: true,
      },
      {
        url: null,
        label: 'Selanjutnya &raquo;',
        active: false,
      },
    ],
    path: 'https://arrayan-engine.lihar.id/api/v1/article',
    per_page: 10,
    to: 1,
    total: 1,
  },
  {
    current_page: 8,
    from: 7,
    last_page: 10,
    links: [
      {
        url: null,
        label: '&laquo; Sebelumnya',
        active: false,
      },
      {
        url: 'https://arrayan-engine.lihar.id/api/v1/article?page=1',
        label: 1,
        active: true,
      },
      {
        url: null,
        label: 'Selanjutnya &raquo;',
        active: false,
      },
    ],
    path: 'https://arrayan-engine.lihar.id/api/v1/article',
    per_page: 10,
    to: 1,
    total: 1,
  },
  {
    current_page: 9,
    from: 8,
    last_page: 10,
    links: [
      {
        url: null,
        label: '&laquo; Sebelumnya',
        active: false,
      },
      {
        url: 'https://arrayan-engine.lihar.id/api/v1/article?page=1',
        label: 1,
        active: true,
      },
      {
        url: null,
        label: 'Selanjutnya &raquo;',
        active: false,
      },
    ],
    path: 'https://arrayan-engine.lihar.id/api/v1/article',
    per_page: 10,
    to: 1,
    total: 1,
  },
  {
    current_page: 10,
    from: 9,
    last_page: 10,
    links: [
      {
        url: null,
        label: '&laquo; Sebelumnya',
        active: false,
      },
      {
        url: 'https://arrayan-engine.lihar.id/api/v1/article?page=1',
        label: 1,
        active: true,
      },
      {
        url: null,
        label: 'Selanjutnya &raquo;',
        active: false,
      },
    ],
    path: 'https://arrayan-engine.lihar.id/api/v1/article',
    per_page: 10,
    to: 1,
    total: 1,
  },
];

export default {
  getNews: () => ({
    type: 'GET_NEWS',
    payload: services().get(`/article?page=1`),
  }),
  getNewsMain: (query) => ({
    type: 'GET_NEWS_MAIN',
    payload: services().get(`/article?${qs.stringify(query)}`),
  }),
  getNewsBySlug: (slug) => ({
    type: 'GET_NEWS_SLUG',
    payload: services().get(`/article/${slug}`),
  }),
  pagination: (query) => {
    const page = pages[query.page - 1];
    return {
      type: 'GET_PAGINATION',
      payload: page,
    };
  },
};
