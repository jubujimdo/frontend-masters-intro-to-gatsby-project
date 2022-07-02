import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';

export const query = graphql`
query SanityEpisode($id: String!){
    sanityEpisode(id: {eq: $id}){
        title
      guest {
        name
        guestImage {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            gatsbyImageData
          }
        }
      }
      slug {
        current
      }
      description
      youtubeID
}}
`;


export default function SanityEpisode({data}){
  console.log(JSON.stringify(data, null, 2))

  const episode = data.sanityEpisode;
    
  return (
      <Layout title={episode.title} description={episode.description}>
      <GatsbyImage
        image={episode.guest[0].guestImage.asset.gatsbyImageData}
        alt={episode.title}
      />
      <h1>{episode.title}</h1>
      <p>
        (posted {episode.date}) — {episode.description}
      </p>
      <ul>
        <li>
          <a href={`https://www.learnwithjason.dev/${episode.slug.current}`}>
            full episode and details
          </a>
        </li>
        <li>
          <a href={`https://youtu.be/${episode.youtubeID}`}>watch on YouTube</a>
        </li>
      </ul>
    </Layout>
    )
}