import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ seo }) => {
  const data = useStaticQuery(graphql`
    query HELMET_QUERY {
      me: file(relativePath: { eq: "me.md" }) {
        childMdx {
          frontmatter {
            miniBio
            email
            phone
            url
            handle
            twitterURL
            linkedinURL
          }
        }
      }
    }
  `);

  const {
    miniBio,
    email,
    url,
    handle,
    username,
    twitterURL,
    linkedinURL,
  } = data.me.childMdx.frontmatter;

  const breadcrumbs = seo.breadcrumbs.map((item, index) => {
    return {
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${url}${item.path}`,
    };
  });

  return (
    <Helmet>
      <title>
        {seo.title && `${seo.title} | `} CursorBeat
      </title>
      <meta name="Description" content={seo.description} />
      <meta name="description" content={seo.description} />
      />

      {/* Open Graph meta tags */}
      <meta
        property="og:title"
        content={`${seo.title &&
          seo.title + ' | '}CursorBeat.dev Blog`}
      />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={`${url}${seo.imgUrl}`} />
      <meta
        property="og:type"
        content={
          seo.page === 'blogPost' || seo.page === 'tutorial'
            ? 'article'
            : 'website'
        }
      />

      {/* Twitter meta tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={handle} />
      <meta property="twitter:creator" content={handle} />
      <meta
        property="twitter:title"
        content={`${seo.title &&
          seo.title + ' | '}CursorBeat.dev Blog`}
      />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={`${url}${seo.imgUrl}`} />
      <meta property="twitter:image:alt" content={seo.imageAlt} />

      {/* Person Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          email: `mailto:${email}`,
          image: '',
          jobTitle: 'Software-Developer',
          name: 'Adrian Grimm',
          description: `${miniBio}`,
          birthPlace: 'Germany',
          birthDate: '1987',
          gender: 'male',
          nationality: 'Germany',
          url: `${url}`,
          sameAs: [
            `${twitterURL}`,
            `${linkedinURL}`,
          ],
        })}
      </script>

      {/* Breadcrumbs Schema.org markup.
          only appears on non-index pages */}
      {seo.page !== 'index' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs,
          })}
        </script>
      )}

    </Helmet>
  );
};

Head.propTypes = {
  seo: PropTypes.object.isRequired,
};

export default Head;
