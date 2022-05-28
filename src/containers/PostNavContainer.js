import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"

function PostNavContainer({ previous, next }) {
  return (
    <PostNavContainerStyle>
      <ul>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              <img
                src={require("../images/prev.svg").default}
                alt={previous.frontmatter.title}
              />
              {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title}
              <img
                src={require("../images/next.svg").default}
                alt={next.frontmatter.title}
              />
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
  opacity: 0.9;
  z-index: 100;
  * {
    color: var(--themFont);
    font-size: 1.2vw;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 10px;
    a {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    @media screen and (min-width: 1920px) {
      height: 35px;
      li {
        img {
          width: 35px;
        }
      }
    }
    @media screen and (min-width: 1080px) and (max-width: 1919px) {
      height: 30px;
      li {
        img {
          width: 30px;
        }
      }
    }
    @media screen and (min-width: 768px) and (max-width: 1079px) {
      height: 20px;
      li {
        img {
          width: 20px;
        }
      }
    }
    @media screen and (max-width: 767px) {
      height: 15px;
      li {
        img {
          height: 15px;
        }
      }
    }
  }
`
export default PostNavContainer
