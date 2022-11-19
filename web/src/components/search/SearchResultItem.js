import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { format } from 'date-fns';
import { Title } from '../typography/Title';
import { SearchResultItemStyles } from '../../styles/search/SearchResultItemStyles';
import ParagraphText from '../typography/ParagraphText';
import CategoryGrid from '../category/CategoryGrid';
import { SearchModalContext } from '../../contexts/SearchModalContext';

function BlogsSearchResultItem({ blog }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/blogs/${blog.slug.current}`}
      onClick={closeSearchModal}
    >
      <GatsbyImage
        image={blog.coverImage.asset.gatsbyImageData}
        className="img"
      />
      <div>
        <Title className="title">{blog.title}</Title>
        <ParagraphText className="categoriesText">
          {format(new Date(blog.publishedAt), 'p, MMMM dd, yyyy')}
        </ParagraphText>
      </div>
    </SearchResultItemStyles>
  );
}

function CategoriesSearchResultItem({ category }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/categories/${category.slug.current}`}
      onClick={closeSearchModal}
    >
      <Title className="title">{category.title}</Title>
    </SearchResultItemStyles>
  );
}

function AuthorsSearchResultItem({ author }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/authors/${author.slug.current}`}
      onClick={closeSearchModal}
    >
      <GatsbyImage
        image={author.profileImage.asset.gatsbyImageData}
        alt={author.profileImage.alt}
        className="authorProfileImg"
      />
      <Title className="title">{author.name}</Title>
    </SearchResultItemStyles>
  );
}

export {
  BlogsSearchResultItem,
  CategoriesSearchResultItem,
  AuthorsSearchResultItem,
};
