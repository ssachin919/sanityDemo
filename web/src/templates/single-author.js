import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import MyPortableText from '../components/MyPortableText';
import SEO from '../components/SEO';
import { Title } from '../components/typography/Title';
import BlogGrid from '../components/blog/BlogGrid';
import { SingleAuthorStyles } from '../styles/author/SingleAuthorStyles';
import PageSpace from '../components/PageSpace';

export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!) {
    sanityAuthor(id: { eq: $id }) {
      name
      _rawBio
      profileImage {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
    allSanityBlog(filter: { author: { id: { eq: $id } } }) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
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
      }
    }
  }
`;

function SingleAuthor({ data }) {
  const author = data.sanityAuthor;
  const blogs = data.allSanityBlog.nodes;

  return (
    <PageSpace top={80} bottom={100}>
      <SEO title={author.name} />
      <div className="container">
        <SingleAuthorStyles>
          <div className="author-header">
            <GatsbyImage
              image={author.profileImage.asset.gatsbyImageData}
              alt={author.profileImage.alt}
            />
            <Title className="name">{author.name}</Title>
            <div className="bio">
              <MyPortableText value={author._rawBio} />
            </div>
          </div>
          <hr className="hr" />
          <BlogGrid blogs={blogs} />
        </SingleAuthorStyles>
      </div>
    </PageSpace>
  );
}

export default SingleAuthor;
