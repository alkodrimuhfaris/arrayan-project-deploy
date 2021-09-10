// import qs from 'qs';
import qs from 'qs';
import services from '../../helpers/services';

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
  getNewsDraft: (slug) => ({
    type: 'GET_NEWS_DRAFT',
    payload: services().get(`/article/draft/${slug}`),
  }),
  getPopularNews: () => ({
    type: 'GET_NEWS_POPULAR',
    payload: services().get(`/article/popular`),
  }),
  getTags: () => ({
    type: 'GET_TAGS',
    payload: services().get(`/tag`),
  }),
};
