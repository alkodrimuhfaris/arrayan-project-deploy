import {combineReducers} from 'redux';

// news
import newsData from './news/newsData';
import newsDataMain from './news/news';
import readNews from './news/readNews';
import draftNews from './news/draftNews';
import dataFromGetTags from './news/tags';
import dataFromGetPopularNews from './news/popularNews';

// registrations
import postRegistration from './registrations/postRegistration';

// home
import homeData from './home/home';

// project
import projectData from './project/projectSlug';

export default combineReducers({
  // news
  newsData,
  newsDataMain,
  readNews,
  draftNews,
  dataFromGetTags,
  dataFromGetPopularNews,

  // registration
  postRegistration,

  // home
  homeData,

  // project
  projectData,
});
