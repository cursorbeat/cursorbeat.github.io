import React from 'react';
import Layout from './layout';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { getSrc } from "gatsby-plugin-image"
import Moment from 'react-moment';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import BlogAuthor from '../components/blog/BlogAuthor';
import BlogPostPageWrapper from '../styles/blog/BlogPostStyles';
const path = require(`path`);


// TODO add next and previous post links

const blogPost = props => {
  const { path, data } = props;
  const {
    type,
    title,
    slug,
    subtitle,
    imageTitle,
    imageAlt,
    date,
    tags,
  } = data.mdx.frontmatter;

  // ? set SEO meta data depending on post type
  let seo;
  if (type === 'blogPost') {
    seo = {
      page: `${type}`,
      title: `${title}`,
      description: data.mdx.excerpt,
      url: `https://blog.cursorbeat.dev/${slug}`,
      imgUrl: getSrc(data.file),
      imgAlt: imageAlt,
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
      description: data.mdx.excerpt,
      url: `https://blog.cursorbeat.dev/${slug}`,
      imgUrl: getSrc(data.file),
      imgAlt: imageAlt,
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

        {data.mdx.timeToRead &&
          (type === 'tutorial' ? (
            <p>
              Approx. {data.mdx.timeToRead + 5} minutes to
              complete
            </p>
          ) : (
            <p>{data.mdx.timeToRead} minute read</p>
          ))}

        <BlogAuthor />

        <GatsbyImage
          image={getImage(data.file)}
          className="mainpostimage"
          style={{
            marginBottom: '25px',
          }}
          alt={imageAlt}
          title={imageTitle}
        />

        <div className="articelBody">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>

        <div className="closing">
          <h3>- CursorBeat.dev Blog</h3>
        </div>
      </BlogPostPageWrapper>
    </Layout>
  );
};

blogPost.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default blogPost;

export const BLOG_POST_QUERY = graphql`
  query BLOG_POST_QUERY($slug: String!, $imgRegEx: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 370)
      body
      timeToRead
      frontmatter {
        type
        title
        slug
        subtitle    
        imageTitle
        imageAlt
        date
        tags
      }
    }

    file(relativePath: { regex: $imgRegEx }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
