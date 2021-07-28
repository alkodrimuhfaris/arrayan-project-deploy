export default {
  subImage: (data = {}) => {
    const dataArr = Object.entries(data);
    if (!dataArr.length) {
      return dataArr;
    }
    const projectSlider = [];
    dataArr.forEach(([prop, val], index) => {
      const obj = {
        subTitle: '',
        subImg: '',
      };
      if (prop === 'sub_projects' && !prop.includes('sub_title')) {
        return null;
      }
      if (prop.includes('sub_title') && val) {
        const [s, titleNum] = prop.split('sub_title');
        obj.subTitle = val;
        dataArr.forEach(([prop2, val2], index2) => {
          if (prop2 === `sub_image${titleNum}`) {
            obj.subImg = val2;
          }
        });
        projectSlider.push(obj);
      }
      return obj;
    });
    return projectSlider;
  },
  subProjects: (data = {}) =>
    data.map((val) => {
      const {id, title, area, specs, ...imgs} = val;
      const img = Object.entries(imgs);
      const images = [];
      img.forEach(([prop, value], idx) => {
        if (prop.includes('image') && value) {
          images.push(value);
        }
      });
      return {id, title, area, specs, images};
    }),
};
