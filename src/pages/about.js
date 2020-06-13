import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../templates/layout';
import { DefaultPageWrapper } from '../styles/pages/DefaultStyles';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const About = ({ path, data }) => {
  const seo = {
    page: `about`,
    title: 'About CursorBeat',
    description: `${data.me.childMdx.excerpt}`,
    url: `https://blog.cursorbeat.dev/about`,
    imgUrl: `${data.pageImg.publicURL}`,
    imgAlt: `cursorbeat logo, twitter, github icons with @cursorbeat username`,
    breadcrumbs: [
      {
        name: `About`,
        path: `/about`,
      },
    ],
  };

  return (
    <Layout seo={seo} path={path}>
      <DefaultPageWrapper>
        <MDXRenderer>{data.me.childMdx.body}</MDXRenderer>
      </DefaultPageWrapper>
    </Layout>
  );
};

About.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default About;

export const ABOUT_PAGE_QUERY = graphql`
  query ABOUT_PAGE_QUERY {
    me: file(relativePath: { eq: "me.md" }) {
      childMdx {
        id
        excerpt(pruneLength: 370)
        frontmatter {
          title
          lastUpdated
          name
          email
          phone
          miniBio
          portrait
          handle
          username
          twitterURL
          githubURL
          linkedinURL
        }
        body
      }
    }

    pageImg: file(relativePath:{}) {
      publicURL # used for SEO
    }
  }
`;
