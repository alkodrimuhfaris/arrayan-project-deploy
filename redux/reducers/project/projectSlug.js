/* eslint-disable camelcase */
import projectSlug from '../../../helpers/projectSlug';

const initialState = {
  success: false,
  error: false,
  pending: false,

  // data
  id: 0,
  title: '',
  slug: '',
  description: '',
  image: '',
  subTitleProject: [],
  subProjects: [],
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case 'GET_PROJECT_SLUG_PENDING': {
      return {
        ...state,
        success: false,
        error: false,
        pending: true,
        message: 'Mendapatkan data project...',
      };
    }
    case 'GET_PROJECT_SLUG_REJECTED': {
      return {
        ...state,
        success: false,
        error: true,
        pending: false,
        message: 'Pengambilan data gagal, silahkan muat ulang halaman',
      };
    }
    case 'GET_PROJECT_SLUG_FULFILLED': {
      const {id, title, slug, description, image, sub_projects, ...subData} =
        action.payload.data.data;
      const subTitleProject = projectSlug.subImage(subData);
      const subProjects = projectSlug.subProjects(sub_projects);
      return {
        ...state,
        success: true,
        error: false,
        pending: false,
        id,
        title,
        slug,
        description,
        image,
        subTitleProject,
        subProjects,
        message: 'Pengambilan data sukses!',
      };
    }
  }
};
