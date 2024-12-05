const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require('fs-extra');

// Add static file handling
exports.onPostBuild = async () => {
  try {
    // Ensure static directory exists
    await fs.ensureDir('./public/static/blog');
    
    // Copy entire blog content
    await fs.copy(
      './content/blog',
      './public/static/blog'
    );
    
    console.log('Successfully copied static files');
  } catch (err) {
    console.error('Error copying static files:', err);
  }
};

// Add schema customization to fix GraphQL errors
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadata {
      siteUrl: String
      name: String
      title: String
      author: String
      description: String
      github: String
      linkedin: String
      about: String
      projects: [Project]
      experience: [Experience]
      skills: [Skill]
    }

    type Project {
      name: String!
      description: String!
      link: String
    }

    type Experience {
      name: String!
      description: String!
      link: String
    }

    type Skill {
      name: String!
      description: String!
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `;
  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.jsx`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`,
    });
  }
};