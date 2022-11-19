import { graphql } from 'gatsby';
import React from 'react';
import PageSpace from '../components/PageSpace';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import AuthorGrid from '../components/authors/AuthorGrid';
import Pagination from '../components/Pagination';

export const AuthorsQuery = graphql`
  query authorsQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function AuthorList({ data, pageContext }) {
  const authors = data.allSanityAuthor.nodes;
  const { currentPage, numberOfPages } = pageContext;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="Authors" />
      <div className="container">
        <PageHeader
          title="All Authors"
          description="This month will bring about the 88th Acaedemy Awards. 
          Starting in 1928, this prestigious award ceremony..."
        />
        <AuthorGrid authors={authors} />
        {numberOfPages > 1 && (
          <Pagination
            baseUrl="/authors"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </PageSpace>
  );
}

export default AuthorList;
