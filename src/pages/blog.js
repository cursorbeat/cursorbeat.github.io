import React from 'react';
import { graphql } from 'gatsby';
// import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import BlogPageWrapper from '../styles/blog/BlogPageStyles';
import BlogListing from '../components/index/BlogListing';

const Blog = ({ path, data }) => {
  const seo = {
    page: `blog`,
    title: `Blog`,
    description: `I like writing about things. Life updates, random epiphanies, cool lessons, etc. Find 'em here!`,
    url: `hhttps://blog.cursorbeat.dev/blog`,
    imgUrl: `${data.pageImg.publicURL}`,
    imgAlt:
      'cursorbeat logo, github icons with @cursorbeat username',
    breadcrumbs: [
      {
        name: `Blog`,
        path: `/blog`,
      },
    ],
  };

  return (
    <Layout seo={seo} path={path}>
      <BlogPageWrapper>
        <h1>Blog Posts</h1>
        <div className="blogPostList">
          {data.allMdx.edges.map(({ node }) => (
            <BlogListing key={node.id} data={node} />
          ))}
        </div>
      </BlogPageWrapper>
    </Layout>
  );
};

Blog.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default Blog;

export const BLOG_PAGE_QUERY = graphql`
query BLOG_PAGE_QUERY {
  allMdx(
    filter: { frontmatter: { type: { eq: "blogPost" } } }
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        id
        excerpt(pruneLength: 300)
        timeToRead
        frontmatter {
          slug
          title
          date
          type
          tags
        }
      }
    }
  }

  pageImg: file(relativePath: { eq: "CursorBeat.svg" }) {
    publicURL # used for SEO
  }
}
`;
