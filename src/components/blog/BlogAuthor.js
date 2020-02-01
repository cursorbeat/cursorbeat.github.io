import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const BlogAuthor = () => {
  const myData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.md" }) {
        childMarkdownRemark {
          id
          frontmatter {
            name
            miniBio
            portrait
            email
            handle
            twitterURL
            githubURL
            linkedinURL
          }
        }
      }

      portrait: file(relativePath: { eq: "portrait.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const {
    name,
    miniBio,
    portrait,
    email,
    handle,
  } = myData.file.childMarkdownRemark.frontmatter;

  return (
    <div className="author">
      <div className="portrait">
        <Img
          fluid={myData.portrait.childImageSharp.fluid}
          title="Adrian Grimm"
          alt="photo of Adrian Grimm"
          style={{
            height: '80px',
            width: '80px',
            borderRadius: '100%'
          }}
        />
      </div>
      <div className="myInfo">
        <h3>By: {name}</h3>
        <p>{miniBio}</p>
      </div>
    </div>
  );
};

export default BlogAuthor;
