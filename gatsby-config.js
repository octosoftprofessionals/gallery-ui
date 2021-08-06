/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-svg',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://superchiefgallerynft.us1.list-manage.com/subscribe/post?u=cb140b2351789f045bd91a92a&amp;id=57d8b04989',
        timeout: 3500,
      },
    },
  ],
}
