import React from 'react';
import { buttonTypes } from '../../constants/buttonTypes';
import Button from '../buttons/Button';
import { Title } from '../typography/Title';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import MyPortableText from '../MyPortableText';

function CategoryItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <Title className="title">{title}</Title>
      <div className="text">
        <MyPortableText value={description} />
      </div>
      <Button to={`/categories/${slug.current}`} variant={buttonTypes.outline}>
        Explore Category
      </Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;
