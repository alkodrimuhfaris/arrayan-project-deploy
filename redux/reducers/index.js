import {combineReducers} from 'redux';
// carousel
import getAllCarousel from './carousel/getAllCarousel';

// news
import getAllNews from './news/getAllNews';

// projects
import getAllProjects from './projects/getAllProjects';

// registrations
import postRegistration from './registrations/postRegistration';

// testimony
import getAllTestimony from './testimony/getAllTestimony';

export default combineReducers({
  // carousel
  getAllCarousel,

  // news
  getAllNews,

  // registration
  postRegistration,

  // projects
  getAllProjects,

  // testimony
  getAllTestimony,
});
