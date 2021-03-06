import styled from "@emotion/styled"
import { navigate } from "gatsby"
import React, { useState } from "react"

function PostCard({ post, isSlide, selectId, setSelectId }) {
  const [isHover, setIsHover] = useState(false)
  return !isSlide ? (
    <PostCardStyle
      $isSlide={isSlide}
      onClick={() => {
        setIsHover(false)
        navigate(post.fields.slug)
      }}
    >
      <img
        src={`/poster/${
          post.frontmatter.imgname ? post.frontmatter.imgname : "default.png"
        }`}
        alt={post.frontmatter.title.split("&")[0]}
      />
    </PostCardStyle>
  ) : (
    <PostCardStyle
      onMouseOver={e => {
        e.stopPropagation()
        setSelectId(post.id)
        setIsHover(true)
      }}
      onMouseLeave={() => {
        setIsHover(false)
      }}
      onClick={() => {
        if (selectId === post.id) {
          setIsHover(true)
        } else {
          setIsHover(false)
        }
      }}
    >
      <img
        src={`/poster/${
          post.frontmatter.imgname ? post.frontmatter.imgname : "default.png"
        }`}
        alt={post.frontmatter.title}
      />
      <div
        className={isHover ? "valid" : "unvalid"}
        onClick={e => {
          e.stopPropagation()
          if (isHover && selectId === post.id) {
            navigate(post.fields.slug)
          }
        }}
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
  ${({ $isSlide }) => {
    if (false === $isSlide) return "cursor: pointer;"
  }}
  position: relative;
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
    cursor: pointer;
  }
  img {
    display: block;
    width: 100%;
  }
`
