import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"

function PostNavContainer({ previous, next }) {
  return (
    <PostNavContainerStyle>
      <ul style={{}}>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </PostNavContainerStyle>
  )
}

const PostNavContainerStyle = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--themBg);
  z-index: 100;
  @media screen and (min-width: 1920px) {
    height: 60px;
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    height: 50px;
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    height: 30px;
  }
  @media screen and (max-width: 767px) {
    height: 25px;
  }
  * {
    color: var(--themFont);
    font-size: 1.4vw;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
  }
`
export default PostNavContainer
