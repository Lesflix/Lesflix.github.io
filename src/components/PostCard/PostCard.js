import styled from "@emotion/styled"
import { navigate } from "gatsby"
import React, { useState } from "react"

function PostCard({ post, isSlide }) {
  const [isHover, setIsHover] = useState(false)
  return isSlide !== "/" ? (
    <PostCardStyle
      onClick={() => {
        setIsHover(false)
        navigate(post.fields.slug)
      }}
    >
      <img
        src={`/poster/${
          post.frontmatter.poster ? post.frontmatter.poster : "default.png"
        }`}
        alt={post.frontmatter.title}
      />
    </PostCardStyle>
  ) : (
    <PostCardStyle
      onMouseOver={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => {
        setIsHover(false)
      }}
      onDoubleClick={() => {
        setIsHover(false)
        navigate(post.fields.slug)
      }}
    >
      <img
        src={`/poster/${
          post.frontmatter.poster ? post.frontmatter.poster : "default.png"
        }`}
        alt={post.frontmatter.title}
      />
      <div
        onClick={() => {
          setIsHover(false)
          navigate(post.fields.slug)
        }}
        className={isHover ? "valid" : "unvalid"}
      >
        <img src={require(`../../images/play.svg`).default} alt="이동" />
      </div>
    </PostCardStyle>
  )
}

export default PostCard

const PostCardStyle = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 30px;
  box-sizing: border-box;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &:hover {
    /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */
  }
  .unvalid {
    display: none;
  }
  .valid {
    display: block;
    width: 50%;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: calc(-25%);
    background-color: rgba(255, 255, 255, 0.4);
  }
  img {
    display: block;
    width: 100%;
  }
`
