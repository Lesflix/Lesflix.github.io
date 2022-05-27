import styled from "@emotion/styled"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

function PostContentContainer({ postData }) {
  const {
    title,
    description,
    excerpt,
    date,
    posterUrl,
    genre,
    poster,
    release,
    ott,
    countries,
  } = postData
  return (
    <PostContentContainerStyle $bgImg={posterUrl}>
      <div className="container">
        <div className="poster">
          <img
            src={
              require(`../images/${poster ? poster : "default.png"}`).default
            }
            alt={title}
          />
        </div>
        <div className="info-data">
          <div className="title">{title}</div>
          <div className="release">{release}-종료여부</div>
          <div className="">개요</div>
          <div className="short">{description}</div>
          <div>보러가기 </div>
          ott리스트
        </div>
      </div>
    </PostContentContainerStyle>
  )
}
const PostContentContainerStyle = styled.section`
  padding: 20px 0;
  position: relative;
  &::before {
    content: "";
    background-image: url(${({ $bgImg }) => ($bgImg ? $bgImg : "")});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.3;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  .container {
    display: flex;
    margin: 0 auto;
    width: 80vw;
    max-width: 700px;
    gap: 30px;
    .poster {
      z-index: 30;
      width: 50%;
      border-radius: 12px;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
      }
    }
    .info-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        font-size: 30px;
        font-weight: 700;
      }
      flex-grow: 1;
    }
  }
`
export default PostContentContainer
