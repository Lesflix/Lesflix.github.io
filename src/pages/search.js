import { graphql } from "gatsby"
import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import PostListContainer from "../containers/PostListContainer"
import HeaderContainer from "../containers/HeaderContainer"
import DivContainer from "../components/DivContainer"
import styled from "@emotion/styled"
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
          originalTitle
          description
          genre
          imgname
          release
          ott
          countries
          end
          categories
        }
      }
    }
  }
`
function Search({ data, location }) {
  const searchWord = decodeURI(location.search?.replace("?q=", ""))
  const searchWordTrim = searchWord.replace(/ /gi, "")
  const postList = data.allMarkdownRemark.nodes || []
  const filteredPosts = postList.filter(post => {
    const { title, description, genre, countries, ott, categories } =
      post.frontmatter
    return (
      (description &&
        description
          .replace(/ /gi, "")
          .toLowerCase()
          .includes(searchWordTrim?.toLowerCase())) ||
      (title &&
        title
          .replace(/ /gi, "")
          .toLowerCase()
          .includes(searchWordTrim?.toLowerCase())) ||
      (genre &&
        genre
          .replace(/ /gi, "")
          .toLowerCase()
          .includes(searchWordTrim?.toLowerCase())) ||
      (countries &&
        countries
          .join("")
          .toLowerCase()
          .includes(searchWordTrim?.toLowerCase())) ||
      (ott &&
        ott.join("").toLowerCase().includes(searchWordTrim?.toLowerCase())) ||
      (categories &&
        categories
          .join("")
          .toLowerCase()
          .includes(searchWordTrim?.toLowerCase()))
    )
  })

  return (
    <div>
      <HeaderContainer />
      <Layout location={location}>
        <Seo title={`${searchWord} 검색 결과`} description={""} />
        <DivContainer>
          <Msg>
            {searchWord ? `${searchWord} 검색 결과` : "검색어를 입력해주세요"}
          </Msg>
          <PostListContainer postList={filteredPosts} isSlide={false} />
        </DivContainer>
      </Layout>
    </div>
  )
}

const Msg = styled.strong`
  font-size: 2.8vw;
`

export default Search
