import styled from "@emotion/styled"
import { Link, navigate } from "gatsby"
import React, { useState } from "react"

function PostCard({ post }) {
  const poster = post.frontmatter.poster
    ? post.frontmatter.poster
    : "default.png"
  const [isHover, setIsHover] = useState(false)
  return (
    <PostCardStyle
      onMouseEnter={() => {
        setIsHover(true)
      }}
      onMouseLeave={() => {
        setIsHover(false)
      }}
      onDoubleClick={() => {
        navigate(post.fields.slug)
      }}
    >
      <div>
        <img
          src={require(`../../images/${poster}`).default}
          alt={post.frontmatter.title}
        />
      </div>
      <div
        onClick={() => {
          navigate(post.fields.slug)
        }}
        className={isHover ? "valid" : "unvalid"}
      >
        <img src={require(`../../images/play.svg`).default} alt="" />
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
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
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
    width: 100%;
  }
`
