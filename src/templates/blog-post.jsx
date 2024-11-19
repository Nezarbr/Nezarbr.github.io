import { graphql } from 'gatsby';
import moment from 'moment';
import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { loadKaTeX } from '../utils/katex-loader';

import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const classes = {
  wrapper: 'mt-16 blog-content prose prose-lg max-w-none',
  title: 'mt-16 text-4xl text-gray-900 font-bold',
  date: 'text-gray-600 font-light',
};

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const contentRef = useRef(null);

  useEffect(() => {
    const renderMath = async () => {
      await loadKaTeX();
      if (window.renderMathInElement && contentRef.current) {
        window.renderMathInElement(contentRef.current, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true },
          ],
          throwOnError: false,
        });
      }
    };

    renderMath();
  }, [post.html]);

  return (
    <Layout>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
          integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Header metadata={data.site.siteMetadata} />
      <SEO title={post.frontmatter.title} />
      <h1 className={classes.title}>{post.frontmatter.title}</h1>
      <p className={classes.date}>
        Posted on {moment(post.frontmatter.date).format('MMMM D, YYYY')}
      </p>
      <div
        ref={contentRef}
        className={classes.wrapper}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;