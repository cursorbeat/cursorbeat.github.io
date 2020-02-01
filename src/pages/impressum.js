import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../templates/layout';
import { DefaultPageWrapper } from '../styles/pages/DefaultStyles';

const Impressum = props => {
  const seo = {
    page: `impressum`,
    title: 'Impressum CursorBeat',
    description: `${props.data.me.childMarkdownRemark.excerpt}`,
    url: `https://blog.cursorbeat.dev/impressum`,
    imgUrl: `${props.data.pageImg.publicURL}`,
    imgAlt: `cursorbeat logo, twitter, github icons with @cursorbeat username`,
    breadcrumbs: [
      {
        name: `Impressum`,
        path: `/impressum`,
      },
    ],
  };

  return (
    <Layout seo={seo} path={props.path}>
      <DefaultPageWrapper
        dangerouslySetInnerHTML={{
          __html: props.data.me.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

export default Impressum;

export const Impressum_PAGE_QUERY = graphql`
  query Impressum_PAGE_QUERY {
    me: file(relativePath: { eq: "impressum.md" }) {
      childMarkdownRemark {
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
        html
      }
    }

    pageImg: file(relativePath:{}) {
      publicURL # used for SEO
    }
  }
`;
