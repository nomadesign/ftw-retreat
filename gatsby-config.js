module.exports = {
  siteMetadata: {
    title: 'For the Women Retreat',
    description: 'A beautiful retreat for creative women. Five all-inclusive days of pliable time. Coming Fall 2018.',
    keywords: 'women, retreat, creative, inclusive'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-119597846-1',
        head: false,
        anonymize: true,
        respectDNT: true
      }
    }
  ]
};
