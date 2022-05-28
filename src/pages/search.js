import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import PostListContainer from "../containers/PostListContainer"
import HeaderContainer from "../containers/HeaderContainer"
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
function Search({ data, location }) {
  const searchWord = decodeURI(location.search?.replace("?q=", ""))

  const postList = data.allMarkdownRemark.nodes || []
  const filteredPosts = postList.filter(post => {
    const { title, description, genre, countries, ott } = post.frontmatter
    return (
      (description &&
        description.toLowerCase().includes(searchWord?.toLowerCase())) ||
      (title && title.toLowerCase().includes(searchWord?.toLowerCase())) ||
      (genre && genre.toLowerCase().includes(searchWord?.toLowerCase())) ||
      (countries &&
        countries.toLowerCase().includes(searchWord?.toLowerCase())) ||
      (ott && ott.join("").toLowerCase().includes(searchWord?.toLowerCase()))
    )
  })

  return (
    <div>
      <Layout location={location}>
        <HeaderContainer />
        <Seo title={`${searchWord} 검색 결과`} />
        <h1>{searchWord} 검색 결과</h1>
        <PostListContainer postList={filteredPosts} isSlide={false} />
      </Layout>
    </div>
  )
}

export default Search
