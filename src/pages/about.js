import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../templates/layout';
import { DefaultPageWrapper } from '../styles/pages/DefaultStyles';

const About = props => {
  const seo = {
    page: `about`,
    title: 'About CursorBeat',
    description: `${props.data.me.childMarkdownRemark.excerpt}`,
    url: `https://blog.cursorbeat.dev/about`,
    imgUrl: `${props.data.pageImg.publicURL}`,
    imgAlt: `cursorbeat logo, twitter, github icons with @cursorbeat username`,
    breadcrumbs: [
      {
        name: `About`,
        path: `/about`,
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

export default About;

export const ABOUT_PAGE_QUERY = graphql`
  query ABOUT_PAGE_QUERY {
    me: file(relativePath: { eq: "me.md" }) {
      childMarkdownRemark {
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
        html
      }
    }

    pageImg: file(relativePath:{}) {
      publicURL # used for SEO
    }
  }
`;
