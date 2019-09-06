const path = require('path');

exports.onCreateWebpackConfig = function({ actions, plugins }) {
  const { setWebpackConfig } = actions;

  setWebpackConfig({
    plugins: [
      plugins.define({
        'process.env.EVENTBRITE_ACTIVE': JSON.stringify(process.env.EVENTBRITE_ACTIVE),
        'process.env.EVENTBRITE_EVENT_ID': JSON.stringify(process.env.EVENTBRITE_EVENT_ID),
        'process.env.GA_TRACKING_ID': JSON.stringify(process.env.GA_TRACKING_ID),
        'process.env.INSTAGRAM_ACCESS_TOKEN': JSON.stringify(process.env.INSTAGRAM_ACCESS_TOKEN),
        'process.env.INSTAGRAM_USER_ID': JSON.stringify(process.env.INSTAGRAM_USER_ID),
        'process.env.MAILCHIMP_LID': JSON.stringify(process.env.MAILCHIMP_LID),
        'process.env.MAILCHIMP_URL': JSON.stringify(process.env.MAILCHIMP_URL),
        'process.env.MAILCHIMP_UUID': JSON.stringify(process.env.MAILCHIMP_UUID)
      })
    ]
  });

  setWebpackConfig({
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
