module.exports = {
  siteMetadata: {
    title: `GP Wiki`,
    name: `Mike`,
    siteUrl: `https://mikes-gospel-principles-wiki.netlify.app`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/perryjm`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ['/introduction', '/codeblock'],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document`, options: {} }]
};
