module.exports = {
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-react-next`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
  ],
};