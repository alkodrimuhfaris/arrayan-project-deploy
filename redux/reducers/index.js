import {combineReducers} from 'redux';

// news
import newsData from './news/newsData';

// news
import newsDataMain from './news/news';

// read news
import readNews from './news/readNews';

// registrations
import postRegistration from './registrations/postRegistration';

// home
import homeData from './home/home';

// project
import projectData from './project/projectSlug';

export default combineReducers({
  // news
  newsData,

  // news main
  newsDataMain,

  // read news
  readNews,

  // registration
  postRegistration,

  // home
  homeData,

  // project
  projectData,
});
