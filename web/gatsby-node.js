exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10;
  // template paths
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');
  const SingleCategoryTemplate = require.resolve(
    './src/templates/single-category.js'
  );
  const categoryListTemplate = require.resolve(
    './src/templates/category-list.js'
  );
  const authorListTemplate = require.resolve('./src/templates/author-list.js');
  const SingleAuthorTemplate = require.resolve(
    './src/templates/single-author.js'
  );

  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityAuthor {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const blogs = result.data.allSanityBlog.nodes;
  const categories = result.data.allSanityCategory.nodes;
  const authors = result.data.allSanityAuthor.nodes;

  // single blogs pages
  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });

  // single category pages
  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.slug.current}`,
      component: SingleCategoryTemplate,
      context: { id: category.id },
    });
  });

  // single Author's pages
  authors.forEach((author) => {
    createPage({
      path: `/authors/${author.slug.current}`,
      component: SingleAuthorTemplate,
      context: { id: author.id },
    });
  });

  // blog-list pages
  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/blogs' : `/blogs/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });

  // category-list pages
  const totalCategoryListPages = Math.ceil(categories.length / postsPerPage);
  Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/categories' : `/categories/${index + 1}`,
      component: categoryListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalCategoryListPages,
        currentPage: index + 1,
      },
    });
  });

  // author-list pages
  const totalAuthorListPages = Math.ceil(authors.length / postsPerPage);
  Array.from({ length: totalAuthorListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? '/authors' : `/authors/${index + 1}`,
      component: authorListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalAuthorListPages,
        currentPage: index + 1,
      },
    });
  });
};
