module.exports = {
  siteMetadata: {
    siteTitle: `초보자를 위한 안드로이드 앱 만들기!`,
    defaultTitle: `초보자를 위한 안드로이드 앱 만들기!`,
    siteTitleShort: `안드로이드 앱 개발 튜토리얼`,
    siteDescription: `초보자를 위한 안드로이드 앱 만들기!`,
    siteUrl: `https://teamcadi.github.io/android-tutorial`,
    siteAuthor: `@rocketseat`,
    siteImage: `/cadi-logo-main.6628dfc.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/android-tutorial/`,
    pathPrefix: `/android-tutorial/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/android-tutorial`,
        background_color: `#ffffff`,
        display: `standalone`
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
