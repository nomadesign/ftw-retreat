const path = require('path');

exports.onCreateWebpackConfig = function({ stage, rules, loaders, plugins, actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        css: path.resolve(__dirname, 'src/assets/css'),
        fonts: path.resolve(__dirname, 'src/assets/fonts'),
        images: path.resolve(__dirname, 'src/assets/images'),
        layouts: path.resolve(__dirname, 'src/components/layouts'),
        modules: path.resolve(__dirname, 'src/components/modules')
      }
    }
  });
};
