require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'For the Women Retreat',
    description:
      'A 5-day creative retreat for women leaders in tech. Join the first edition: October 4-8, 2018 in Québec, Canada',
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
