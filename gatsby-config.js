module.exports = {
  siteMetadata: {
    title: 'For the Women Retreat',
    description: 'A retreat for accomplished women in a beautiful environment.',
    keywords: 'retreat, women'
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
