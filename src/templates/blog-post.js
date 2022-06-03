import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import HeaderContainer from "../containers/HeaderContainer"
import PostNavContainer from "../containers/PostNavContainer"
import PostContentContainer from "../containers/PostContentContainer"
import PostDetailContainer from "../containers/PostDetailContainer"
const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next, markdownRemark } = data
  const htmls = markdownRemark.html
  const { title, description, excerpt } = post.frontmatter
  return (
    <>
      <HeaderContainer />
      <Layout location={location}>
        <Seo title={title} description={description || excerpt} />
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <PostContentContainer postData={post.frontmatter} />
          <PostDetailContainer html={htmls} />
        </article>
      </Layout>
      <PostNavContainer previous={previous} next={next} />
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
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
        originalTitle
        description
        genre
        imgname
        release
        ott
        countries
        categories
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
  }
`
