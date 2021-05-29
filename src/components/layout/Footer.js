import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import FooterWrapper from '../../styles/layout/FooterStyles';

import gatsbyImg from '../../images/tech-icons/Gatsby_Monogram.svg';
import javascriptImg from '../../images/tech-icons/javascript.svg';
import mdxImg from '../../images/tech-icons/mdx.svg';
import travisImg from '../../images/tech-icons/travis-ci.svg';
import reactImg from '../../images/tech-icons/react.svg';

const Footer = ({ path }) => {
  const data = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.md" }) {
        childMdx {
          frontmatter {
            url
            email
            handle
            username
          }
        }
      }
      styledImg: file(
        relativePath: { eq: "tech-icons/styled-components.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  `);

  const { email, handle, url } = data.me.childMdx.frontmatter;
  const images = [
    {
      img: javascriptImg,
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      title: 'Javascript',
      alt: 'unofficial javascript logo',
    },
    {
      img: reactImg,
      url: 'https://reactjs.org/',
      title: 'React',
      alt: 'react atom logo',
    },
    {
      img: gatsbyImg,
      url: 'https://gatsbyjs.org/',
      title: 'GatsbyJS',
      alt: 'gatsbyjs logo',
    },
    {
      img: data.styledImg.childImageSharp.gatsbyImageData,
      url: 'https://www.styled-components.com/',
      title: 'styled-components',
      alt: 'nail painting emoji as styled components logo',
    },
    {
      img: mdxImg,
      url: 'https://mdxjs.com/',
      title: 'MDX',
      alt: 'mdx logo',
    },
    {
      img: travisImg,
      url: 'https://travis-ci.com/',
      title: 'Travis-CI',
      alt: 'Travis-CI logo',
    },
  ];

  return (
    <FooterWrapper>
      <span>
        Email me:&nbsp;
        <a href={`mailto:${email}`}> {email}</a>
        <br />
      </span>
      <div className="stackIcons">
        <span>Blog is build with:</span>
        <ul>
          {images.map((m, i) => {
            const { img, url, title, alt } = m;
            return (
              <li key={i}>
                <a href={url} target="_blank" rel="noopener" aria-label={title}>
                  {title === 'styled-components' ? (
                    <GatsbyImage
                      image={img}
                      title={title}
                      alt={alt}
                      style={{ height: '32px', width: '32px' }}
                    />
                  ) : (
                    <img src={img} title={title} alt={alt} />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <span><a href={`/rss.xml`}>RSS-Feed</a> | <a href={`/sitemap.xml`}>Sitemap</a> | <a href={`/impressum`}>Impressum</a></span>
    </FooterWrapper>
  );
};

export default Footer;
