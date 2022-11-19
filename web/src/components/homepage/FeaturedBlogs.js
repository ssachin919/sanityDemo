import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from '../blog/BlogGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured {
        nodes {
          blogs {
            title
            id
            publishedAt
            categories {
              title
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;
  // console.log(featuredBlogs);

  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Featured blogs</SectionTitle>
      <ParagraphText className="featuredBlogs__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nemo
        provident et, ducimys earun iste est corporis
      </ParagraphText>
      <BlogGrid blogs={featuredBlogs} />
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;
