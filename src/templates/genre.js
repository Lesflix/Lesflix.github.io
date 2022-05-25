import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import HeaderContainer from "../containers/HeaderContainer"

function Genre({ data, location }) {
  const { path: genre } = location.state
  const { nodes: PostList, totalCount } = data.allMarkdownRemark
  return (
    <Layout location={location}>
      <HeaderContainer />
    </Layout>
  )
}
export default Genre

export const pageQuery = graphql`
  query filteredPost($genre: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { genre: { eq: $genre } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          genre
        }
      }
      totalCount
    }
  }
`
