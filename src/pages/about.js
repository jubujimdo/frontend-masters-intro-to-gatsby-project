import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const query = graphql`
 query CocktailQuery {
  file(name: {eq: "cocktail"}) {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED)
    }
  }
}
`;



export default function AboutPage({data}){
    return (
        <Layout title='About this site' description='This is the about page'>
            <GatsbyImage 
            image={getImage(data.file)}
            alt="a fancy cocktail"
            />
            <h1>About this site</h1>
            <Link to="/">Back to Home</Link>
        </Layout>
    );
}