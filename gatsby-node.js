const generateBabelConfig = require('gatsby/dist/utils/babel-config');
const path = require('path');

exports.modifyWebpackConfig = function({ config, env }) {
  config.merge({
    resolve: {
      root: path.resolve(__dirname, './src'),
      alias: {
        components: 'components',
        fonts: 'assets/fonts',
        images: 'assets/images'
      }
    }
  });
  return config;
};
