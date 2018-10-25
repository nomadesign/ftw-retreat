require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'For the Women Retreat',
    description: 'A 5-day intimate retreat for women leaders in tech. Second edition: Feb 7-11 in Eleuthera, the Bahamas.',
    keywords: 'women, retreat, creative, inclusive'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true
      }
    }
  ]
};
