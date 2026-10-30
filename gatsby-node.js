const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require('fs-extra');

// No sourcemaps in the production bundle. Gatsby emits .js.map files by default, and they
// embed `sourcesContent` - the complete original JSX - so the published site hands the
// whole of src/ to anyone who opens one. Disabling devtool for the build stage stops them
// being generated at all.
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({ devtool: false });
  }
};

// Posts whose frontmatter says `draft: true` are filtered out of every query, so no page
// is built for them. Their ASSETS must be excluded here too: a blanket copy would leave
// paper.pdf and the raw markdown publicly fetchable under /static/blog/<slug>/ while the
// page itself is gone - hidden in the navigation, still downloadable by URL.
const isDraft = (slug) => {
  const md = path.join('./content/blog', slug, 'index.md');
  if (!fs.existsSync(md)) return false;
  const fm = fs.readFileSync(md, 'utf8').split('---')[1] || '';
  return /^\s*draft:\s*true\s*$/m.test(fm);
};

// Add static file handling
exports.onPostBuild = async () => {
  try {
    // Ensure static directory exists
    await fs.ensureDir('./public/static/blog');

    const drafts = fs.readdirSync('./content/blog').filter(isDraft);
    if (drafts.length) {
      console.log(`Skipping assets for draft posts: ${drafts.join(', ')}`);
    }

    // Copy blog content, minus the drafts
    await fs.copy(
      './content/blog',
      './public/static/blog',
      {
        filter: (src) =>
          !drafts.some((slug) => src.includes(path.join('content', 'blog', slug))),
      }
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
      draft: Boolean
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
          filter: { frontmatter: { draft: { ne: true } } }
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