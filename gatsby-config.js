const path = require(`path`);

module.exports = {
  pathPrefix: `/blog`,
  pathPrefix: `/tutorials`,

  siteMetadata: {
    title: `CursorBeat`,
    description: `Blog of CursorBeat.dev`,
    author: `Adrian Grimm`,
    siteUrl: `https://blog.cursorbeat.dev`,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CursorBeat.dev Blog`,
        short_name: `CursorBeat`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#353535`,
        display: `standalone`,
        lang: `en`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `content`),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `content`, `images`, `blogPosts`),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `content`, `images`),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: path.join(__dirname, `src`, `utils`, `typography`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
        }`,
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
        }`,
        serialize: ({ query: { site, allMarkdownRemark } }) => {
          return allMarkdownRemark.edges.map(edge => {
            return Object.assign({}, edge.node.frontmatter, {
              host: site.siteMetadata.siteUrl,
              sitemap: site.siteMetadata.siteUrl + '/sitemap.xml',
              policy: [{ userAgent: '*', allow: '/' }],
            })
          })
        }        
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        // exclude: ["/category/*", `/path/to/page`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
        }
      },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allSitePage, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.type == 'blogPost' ? 'blog' : 'tutorials'}/${edge.node.frontmatter.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.type == 'blogPost' ? 'blog' : 'tutorials'}/${edge.node.frontmatter.slug}`,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                site {
                  siteMetadata {
                    title
                    description
                    siteUrl
                    site_url: siteUrl
                  }
                }
                allSitePage(filter: {context: {slug: {ne: null}}}) {
                  edges {
                    node {
                      path
                      context {
                        slug
                      }
                    }
                  }
                }
                allMarkdownRemark(
                  filter: { frontmatter: { type: { in: ["blogPost","tutorial"] } } }
                  sort: { fields: [frontmatter___date], order: DESC }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        slug 
                        type
                      }
                    }
                  }
                }        
              }
            `,
            output: "/rss.xml",
            title: "CursorBeat RSS Feed",
          },
        ],
      },
    },
  ],
};
