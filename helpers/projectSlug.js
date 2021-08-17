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
  projectHighlight: (data = {}) => {
    const projectHighlight = [];
    const dataArr = Object.entries(data);
    if (!dataArr.length) {
      return [];
    }
    for (let i = 1; i <= 8; i++) {
      const pH = {
        icon: '',
        title: '',
        subTitle: '',
      };
      dataArr.forEach((val, idx) => {
        if (val[0] === `f${i}_icon` && val[1] && val[1] !== '') {
          pH.icon = val[1];
        }
      });
      dataArr.forEach((val2, idx2) => {
        if (val2[0] === `f${i}_text_1` && val2[1] && val2[1] !== '') {
          pH.title = val2[1];
        }
      });
      dataArr.forEach((val3, idx3) => {
        if (val3[0] === `f${i}_text_2` && val3[1] && val3[1] !== '') {
          pH.subTitle = val3[1];
        }
      });
      if (pH.icon !== '' && pH.title !== '' && pH.title !== '') {
        projectHighlight.push(pH);
      }
    }
    return projectHighlight;
  },
};
