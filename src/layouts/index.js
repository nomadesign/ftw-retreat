import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Header';
import imgHero01 from 'images/hero-01.jpg';
import imgFavicon from 'images/favicon.png';
import '../assets/css/style.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.site.siteMetadata.title} />
      <meta name="twitter:description" content={data.site.siteMetadata.description} />
      <meta name="twitter:image:src" content={'https://forthewomenretreat.com' + imgHero01} />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://forthewomenretreat.com" />
      <meta property="og:image" content={'https://forthewomenretreat.com' + imgHero01} />
      <meta property="og:description" content={data.site.siteMetadata.description} />
      <meta property="og:site_name" content={data.site.siteMetadata.title} />
      <link rel="icon" type="image/png" href={imgFavicon} />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <main>{children()}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        description
        keywords
        title
      }
    }
  }
`;
