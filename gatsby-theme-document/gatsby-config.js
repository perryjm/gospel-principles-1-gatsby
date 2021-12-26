module.exports = {
  siteMetadata: {
    title: `Mike's Gospel Principles Wiki`,
    name: `Gospel Principles`,
    siteUrl: `https://mikes-gospel-principles-wiki.netlify.app`,
    description: `This is my personal website constituting many assembled and quoted resources. I do not take credit for all of the thoughts and ideas expressed here. This is for my own personal use, any other use of this material is not permitted.`,
    social: [
      {
        name: `github`,
        url: `https://github.com/perryjm`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ['/'],
      ignoreIndex: false
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `content`,
        name: `content`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 704
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false
            }
          },
          `gatsby-remark-embed-video`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GP Wiki`,
        short_name: `GP Wiki`,
        start_url: `/`,
        background_color: `#182952`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/site-icon.png'
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`
  ]
};
