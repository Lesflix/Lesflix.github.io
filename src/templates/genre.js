import { graphql } from "gatsby"
import React from "react"
import DivContainer from "../components/DivContainer"
import Layout from "../components/Layout"
import HeaderContainer from "../containers/HeaderContainer"
import PostListContainer from "../containers/PostListContainer"
import SlidePostContainer from "../containers/SlidePostContainer"

const Genre = ({ data, location }) => {
  const { nodes: PostList } = data.allMarkdownRemark
  const { path: genre } = location.state
  return (
    <>
      <HeaderContainer />
      <Layout location={location}>
        <DivContainer>
          <h1>
            총 {PostList.length}개의 {genre}
          </h1>
          <PostListContainer postList={PostList} />
        </DivContainer>
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
