import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import HeaderContainer from "../containers/HeaderContainer"
import SlidePostContainer from "../containers/SlidePostContainer"

const Genre = ({ data, location }) => {
  const genre = location.state?.path
  const { nodes: PostList, totalCount } = data.allMarkdownRemark
  return (
    <>
      <HeaderContainer />
      <Layout location={location}>
        <SlidePostContainer postList={PostList} />
      </Layout>
    </>
  )
}
export default Genre

export const pageQuery = graphql`
  query filteredPost($genre: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___release], order: DESC }
      filter: { frontmatter: { genre: { eq: $genre } } }
    ) {
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
      totalCount
    }
  }
`
