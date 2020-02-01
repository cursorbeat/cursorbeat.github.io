import React from 'react';
import Layout from './layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Moment from 'react-moment';
import BlogAuthor from '../components/blog/BlogAuthor';
import BlogPostPageWrapper from '../styles/blog/BlogPostStyles';
const path = require(`path`);


// TODO add next and previous post links

const blogPost = ({data}) => {
  const {
    type,
    title,
    slug,
    subtitle,
    image,
    imageTitle,
    imageAlt,
    date,
    tags,
  } = data.markdownRemark.frontmatter;

  // ? set SEO meta data depending on post type
  let seo;
  if (type === 'blogPost') {
    seo = {
      page: `${type}`,
      title: `${title}`,
      description: data.markdownRemark.excerpt,
      url: `https://blog.cursorbeat.dev/${slug}`,
      imgUrl: data.file.publicURL,
      imgAlt: data.markdownRemark.frontmatter.imageAlt,
      breadcrumbs: [
        {
          name: `Blog`,
          path: `/blog`,
        },
        {
          name: `${title}`,
          path: `/blog/${slug}`,
        },
      ],
    };
  } else if (type === 'tutorial') {
    seo = {
      page: `${type}`,
      title: `${title}`,
      description: data.markdownRemark.excerpt,
      url: `https://blog.cursorbeat.dev/${slug}`,
      imgUrl: data.file.publicURL,
      imgAlt: data.markdownRemark.frontmatter.imageAlt,
      breadcrumbs: [
        {
          name: `Tutorials`,
          path: `/tutorials`,
        },
        {
          name: `${title}`,
          path: `/tutorials/${slug}`,
        },
      ],
    };
  }

  return (
    <Layout seo={seo} path={path} style={{ textAlign: 'left' }}>
      <BlogPostPageWrapper>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p className="published">
          Published: <Moment date={date} format="MMM DD, YYYY" />
        </p>

        {data.markdownRemark.timeToRead &&
          (type === 'tutorial' ? (
            <p>
              Approx. {data.markdownRemark.timeToRead + 5} minutes to
              complete
            </p>
          ) : (
            <p>{data.markdownRemark.timeToRead} minute read</p>
          ))}

        <BlogAuthor />

        <Img
          className="mainpostimage"
          style={{
            marginBottom: '25px',
          }}
          fluid={data.file.childImageSharp.fluid}
          alt={imageAlt}
          title={imageTitle}
        />

        <article
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />

        <div className="closing">
          <h3>- CursorBeat.dev Blog</h3>
        </div>
      </BlogPostPageWrapper>
    </Layout>
  );
};

export default blogPost;

export const BLOG_POST_QUERY = graphql`
  query BlogPostQuery($slug: String!, $imgRegEx: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 370)
      timeToRead
      frontmatter {
        type
        title
        slug
        subtitle
        image
        imageTitle
        imageAlt
        date
        tags
      }
    }

    file(relativePath: { regex: $imgRegEx }) {
      publicURL # used for SEO
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
