const path = require('path');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withSass({
  /* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass */
  cssModules: true,
});
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
