module.exports = {
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
  ],
};