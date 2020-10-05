module.exports = {
  pathPrefix: "/android-tutorial",
  siteMetadata: {
    siteTitle: `초보자를 위한 안드로이드 앱 만들기!`,
    defaultTitle: `초보자를 위한 안드로이드 앱 만들기!`,
    siteTitleShort: `안드로이드 앱 개발 튜토리얼`,
    siteDescription: `초보자를 위한 안드로이드 앱 만들기!`,
    siteUrl: `https://teamcadi.github.io/android-tutorial`,
    siteAuthor: `@rocketseat`,
    siteImage: `/android-tutorial/cadi-logo-main.6628dfc.png`,
    siteLanguage: `kor`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `src/@rocketseat/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
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
