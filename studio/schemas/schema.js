/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// import custom schemas
import blog from './documents/blog';
import author from './documents/author';

// import custom objects
import customImage from './objects/customImage';
import richText from './objects/richText';
import customCode from './objects/customCode';
import excerptText from './objects/excerptText';
import category from './documents/category';
import featured from './documents/featured';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    blog,
    author,
    category,
    featured,

    // objects
    customImage,
    richText,
    customCode,
    excerptText,
  ]),
});
