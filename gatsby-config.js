// const { HOME_PATH } = require('./constants')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'Description I put in here',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp', // for images
    'gatsby-plugin-sharp', // for images
    {
      // Tell Gatsby that we should be able to query img from the specified directory
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      // Gatsby needs to know about the directory associated with CMS-uploaded images
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`,
      },
    },

    {
      // Tell Gatsby that we should be able to query markdown files from the specified directory
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      // for markdown files being read
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
    'gatsby-plugin-netlify-cms', // admin section for application
  ],
}

// pathPrefix: HOME_PATH,
