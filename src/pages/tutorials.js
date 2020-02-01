import React from 'react';
import { graphql } from 'gatsby';
// import Moment from 'react-moment';
import Layout from '../templates/layout';
import TutorialsPageWrapper from '../styles/tutorials/TutorialsPageStyles';
import BlogListing from '../components/index/BlogListing';

// TODO add `time to complete`
// <h4>{timeToRead + 10} minutes to complete</h4>

const Tutorials = props => {
  const seo = {
    page: `tutorials`,
    title: `Tutorials`,
    description: `This should describe what I'm doing here...`,
    imgUrl: `${props.data.pageImg.publicURL}`,
    imgAlt:
      'cursorbeat logo, twitter, github icons with @cursorbeat username',
    breadcrumbs: [
      {
        name: `Tutorials`,
        path: `/tutorials`,
      },
    ],
  };

  return (
    <Layout seo={seo} path={props.path}>
      <TutorialsPageWrapper>
        <h1>Tutorials</h1>
        <div className="tutorialsList">
          {props.data.allMarkdownRemark.edges.map(({ node }) => (
            <BlogListing key={node.id} data={node} />
          ))}
        </div>
      </TutorialsPageWrapper>
    </Layout>
  );
};

export default Tutorials;

export const TUTORIALS_PAGE_QUERY = graphql`
  query TUTORIALS_PAGE_QUERY {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "tutorial" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 400)
          html
          # timeToRead
          frontmatter {
            slug
            title
            date
            liveLink
            repo
            type
          }
        }
      }
    }

    pageImg: file(relativePath:{}) {
      publicURL # used for SEO
    }
  }
`;
