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
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CursorBeat.dev Blog`,
        short_name: `CursorBeat`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#353535`,
        display: `standalone`,
        lang: `en`,
        icon: path.join(__dirname, 'src', 'images', 'favicon.png'),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'content'),
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: path.join(__dirname, `src`, `utils`, `typography`),
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
        serialize: ({ query: { site, allMdx } }) => {
          return allMdx.edges.map(edge => {
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
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
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
              }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
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
                allMdx(
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
            title: "CursorBeat",
            description: `Blog of CursorBeat.dev`,
            feedUrl: `https://blog.cursorbeat.dev/rss.xml`,
            language: `en-en`,
            copyright: `Copyright © 2020 Cursurbeat`,
            authorName: `Adrian Grimm`,
            ownerName: `Adrian Grimm`,
            ownerEmail: `cursorbeat@adrian-grimm.net`,
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            ////match: "^/blog/"
          },
        ],
      },
    },
  ],
};
