import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import { DefaultPageWrapper } from '../styles/pages/DefaultStyles';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Impressum = ({ path, data }) => {
  const seo = {
    page: `impressum`,
    title: 'Impressum CursorBeat',
    description: `${data.me.childMdx.excerpt}`,
    url: `https://blog.cursorbeat.dev/impressum`,
    imgUrl: `${data.pageImg.publicURL}`,
    imgAlt: `cursorbeat logo, twitter, github icons with @cursorbeat username`,
    breadcrumbs: [
      {
        name: `Impressum`,
        path: `/impressum`,
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

Impressum.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default Impressum;

export const Impressum_PAGE_QUERY = graphql`
  query Impressum_PAGE_QUERY {
    me: file(relativePath: { eq: "impressum.md" }) {
      childMdx {
        id
        excerpt(pruneLength: 370)
        frontmatter {
            lastUpdated
            title
            email
            url
            slug
            subtitle
            date
            tags
            type
        }
        body 
      }
    }

    pageImg: file(relativePath:{}) {
      publicURL # used for SEO
    }
  }
`;
