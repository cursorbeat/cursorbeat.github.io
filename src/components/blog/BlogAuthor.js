import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const BlogAuthor = () => {
  const myData = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.md" }) {
        childMdx {
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
          gatsbyImageData(layout: CONSTRAINED)
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
  } = myData.me.childMdx.frontmatter;

  return (
    <div className="author">
      <div className="portrait">
        <GatsbyImage
          image={myData.portrait.childImageSharp.gatsbyImageData}
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
