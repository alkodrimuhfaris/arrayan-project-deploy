import {combineReducers} from 'redux';

// news
import newsData from './news/newsData';

// registrations
import postRegistration from './registrations/postRegistration';

// home
import homeData from './home/home';

export default combineReducers({
  // news
  newsData,

  // registration
  postRegistration,

  // home
  homeData,
});
