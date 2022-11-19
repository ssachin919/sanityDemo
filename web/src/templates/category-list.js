import { graphql } from 'gatsby';
import React from 'react';
import CategoryGrid from '../components/category/CategoryGrid';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

export const CategoryListQuery = graphql`
  query categoriesQuery($limit: Int!, $offset: Int!) {
    allSanityCategory(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;

function CategoryList({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategory.nodes;
  return (
    <>
      <SEO title="Categories" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Categories"
            description="This month will bring about the 88th Acaedemy Awards.
          Starting in 1928, this prestigious award ceremony..."
          />
          <CategoryGrid categories={categories} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/categories"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default CategoryList;
