import * as React from 'react';
import { Link, useStaticQuery, graphql} from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import {imageWrapper} from '../styles/index.module.css'

export default function IndexPage(){
const data=useStaticQuery(graphql`
    query GetBlogPosts {
    allMdx {
        nodes {
            id
            slug    
            frontmatter {
                title
                description
                date(fromNow: true)
            }
        }
    }
    allSanityEpisode(
    filter: {youtubeID: {ne: ""}}
    sort: {order: ASC, fields: date}
    limit: 20
  ) {
    nodes {
      id
      title
      guest {
        name
      }
      gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
    }
  }
}
    
`);

const posts = data.allMdx.nodes;
const episodes = data.allSanityEpisode.nodes;



    return (
        <Layout>
            <div className={imageWrapper}>
                <StaticImage
                    src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
                    alt="Corgi with red paper hearts"
                    placeholder="blurred"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hello Frontend Masters!</h1>
            <Link to="/about">To About</Link>
            <h2>Check out my blog posts</h2>
            <ul>
                {posts.map((post)=> <li key={post.id}><Link to={post.slug}>{post.frontmatter.title}</Link>{' '}<small>Posted: {post.frontmatter.date}</small></li>)}
            </ul>
            <h2>Latest Episodes</h2>
            <ul>
                {episodes.map((episode)=>
                (
                               <li key={episode.id}>
                                 <Link to={episode.gatsbyPath}>
                                   {episode.title} (with {episode.guest?.[0]?.name})
                                 </Link>
                               </li>
                             )
                )}
            </ul>
        </Layout>
    );
}