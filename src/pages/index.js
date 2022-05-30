import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeaderContainer from "../containers/HeaderContainer"
import PostListContainer from "../containers/PostListContainer"
import DivContainer from "../components/DivContainer"
import MainMsg from "../components/MainMsg/MainMsg"

const Home = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const totalCount = data.allMarkdownRemark.totalCount

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <HeaderContainer />
        <Seo title="레플릭스" description={""} />
      </Layout>
    )
  }
  return (
    <Layout location={location}>
      <HeaderContainer />
      <Seo title="레플릭스" description={""} />
      <DivContainer>
        <div>
          총 <strong>{totalCount}</strong> 개의 컨텐츠가 있어요
        </div>
        <MainMsg />
        <PostListContainer postList={posts} isSlide={false} />
      </DivContainer>
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
    allMarkdownRemark(
      filter: { frontmatter: { title: { regex: "/^((?!시즌).)*$/" } } }

      sort: { fields: [frontmatter___release], order: DESC }
    ) {
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
          poster
          release
          ott
          countries
          cover
          end
          categories
        }
      }
      totalCount
    }
  }
`
