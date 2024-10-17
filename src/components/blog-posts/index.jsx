import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const BlogPosts = ({ posts }) => {
  return (
    <Section title="All Blog Posts">
      {posts.map((post) => (
        <div key={post.node.fields.slug} className="mb-4">
          <SummaryItem
            name={post.node.frontmatter.title}
            description={post.node.frontmatter.description}
            link={post.node.fields.slug}
            internal
          />
          <p className="text-sm text-gray-500">Click on the title to access the full post.</p>
        </div>
      ))}
    </Section>
  );
};

export default BlogPosts;
