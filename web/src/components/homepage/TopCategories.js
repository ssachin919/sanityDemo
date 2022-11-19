import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import CategoryGrid from '../category/CategoryGrid';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);
  const categories = data.allSanityFeatured.nodes[0].category;

  console.log(categories);

  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Categories</SectionTitle>
      <ParagraphText className="info">
        Lorem ipsum dolor, sit amet consectur adipisicing elit. Explicabo
        blanditiis, totam av cel incidunt nisi maiores elifensi aliad dicimes
      </ParagraphText>
      <CategoryGrid categories={categories} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
