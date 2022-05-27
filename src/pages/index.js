import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeaderContainer from "../containers/HeaderContainer"
import SlidePostContainer from "../containers/SlidePostContainer"

const Home = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <HeaderContainer />
        <Seo title="All" />
      </Layout>
    )
  }
  return (
    <Layout location={location}>
      <HeaderContainer />
      <Seo title="All" />
      <SlidePostContainer postList={posts} title={"test"} />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___release], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          genre
          poster
          release
          ott
          countries
          cover
          end
        }
      }
    }
  }
`
