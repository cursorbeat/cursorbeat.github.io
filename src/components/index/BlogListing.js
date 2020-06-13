import React from 'react';
import { Link } from 'gatsby';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import BlogListWrapper from '../../styles/index/BlogListingStyles';
import RightArrow from '../../images/svg/RightArrowSVG';

const BlogListing = ({ data }) => {
  const { frontmatter, excerpt } = data;

  const setSlug = type => {
    if (type === 'blogPost') {
      return `/blog/${frontmatter.slug}`;
    } else if (type === 'tutorial') {
      return `/tutorials/${frontmatter.slug}`;
    }
  };

  return (
    <BlogListWrapper>
      <Link
        to={setSlug(frontmatter.type)}
        aria-label={`Read Blog post: ${frontmatter.title}`}
      >
        <h2>
          {frontmatter.type === 'tutorial' && '[Tutorial]: '}
          {frontmatter.title}
        </h2>
        <h5>
          {frontmatter.subtitle}
        </h5>
        <p className="publishDate">
          Published: <Moment date={frontmatter.date} format="MMMM DD, YYYY" />
        </p>
        <p>{excerpt}</p>
        <ul>
          {frontmatter.tags &&
            frontmatter.tags.map((tag, i) => (
              <li className="listingTag" key={i}>
                <span>{tag}</span>
              </li>
            ))}
        </ul>
        <div className="timeToRead">
        {data.timeToRead &&
          (frontmatter.type === 'tutorial' ? (
            <span>Approx. {data.timeToRead + 5} minutes to complete</span>
          ) : (
            <span>{data.timeToRead} minute read</span>
          ))}
        </div>
        <div className="readMore">
          <p>Read More</p>
          <RightArrow />
        </div>
      </Link>
    </BlogListWrapper>
  );
};

BlogListing.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogListing;
