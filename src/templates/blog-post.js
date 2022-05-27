import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeaderContainer from "../containers/HeaderContainer"
import styled from "@emotion/styled"
import PostNavContainer from "../containers/PostNavContainer"
import PostContentContainer from "../containers/PostContentContainer"
const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next, file } = data
  const { title, description, excerpt, html } = post.frontmatter
  return (
    <>
      <HeaderContainer />
      <Layout location={location}>
        <Seo title={title} description={description || excerpt} />
        <PostMain
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <PostContentContainer
            postData={{
              ...post.frontmatter,
              posterUrl: file?.publicURL ? file?.publicURL : "",
            }}
          />
          <section
            dangerouslySetInnerHTML={{ __html: html }}
            itemProp="articleBody"
          />
          <hr />
        </PostMain>
        <PostNavContainer previous={previous} next={next} />
      </Layout>
    </>
  )
}

export default BlogPostTemplate
const PostMain = styled.article`
  @media screen and (min-width: 1920px) {
    padding: 22px 34px;
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    padding: 22px 34px;
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    padding: 22px 34px;
  }
  @media screen and (max-width: 767px) {
    padding: 12px;
  }
`
export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $cover: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
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
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    file(base: { eq: $cover }, relativeDirectory: { eq: "cover" }) {
      publicURL
    }
  }
`
