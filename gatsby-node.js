const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, reject } = actions;
  const blogRes = await graphql(`
    query BLOG_POST_PAGES_QUERY {
      allMdx(
        filter: { frontmatter: { type: { eq: "blogPost" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id,
            frontmatter {
              slug,
              image
            }
          }
        }
      }
    }
  `);

  if (blogRes.errors) {
    reject(blogRes.errors);
  }

  const blogPostTemplate = path.resolve('./src/templates/blogPost.js');

  await blogRes.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
        slug: node.frontmatter.slug,
        // relative filepath for blogPost.js query
        imgUrl: `content/images/blogPosts/${node.frontmatter.image}`,
        imgRegEx: `/.*(${node.frontmatter.image})$/`,
      },
    });
  });

  // ============================================================

  const tutorialRes = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { type: { eq: "tutorial" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id,
            frontmatter {
              slug,
              image
            }
          }
        }
      }
    }
  `);

  if (tutorialRes.errors) {
    reject(tutorialRes.errors);
  }

  // reuse blogPostTemplate from above
  // const blogPostTemplate = path.resolve('./src/templates/blogPost.js');

  tutorialRes.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `tutorials/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
        slug: node.frontmatter.slug,
        // relative filepath for blogPost.js query
        imgUrl: `content/images/tutorials/${node.frontmatter.slug}/${node.frontmatter.image}`,
        imgRegEx: `/.*(${node.frontmatter.slug}\\\\/${node.frontmatter.image})$/`,
      },
    });
  });

  return;
};

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    //const parent = getNode(node.parent);
    createNodeField({
      name: `slug`,
      node,
      value,
      //value: `/${parent.sourceInstanceName}/${parent.name}`,
    })
  }
};

