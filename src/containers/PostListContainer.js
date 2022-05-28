import styled from "@emotion/styled"
import React from "react"
import PostCard from "../components/PostCard/PostCard"
import { v1 as uuid } from "uuid"
import { useLocation } from "@reach/router"
function PostListContainer({ postList, isSlide }) {
  const path = useLocation().pathname
  return (
    <PostListContainerStyle>
      {postList.length ? (
        postList.map(post => (
          <div className="item" key={uuid()}>
            <PostCard isSlide={isSlide} post={post} />
          </div>
        ))
      ) : path.includes("search") ? (
        <div className="msg">검색 결과가 없습니다</div>
      ) : (
        <div className="msg">준비 중</div>
      )}
    </PostListContainerStyle>
  )
}
const PostListContainerStyle = styled.div`
  width: fit-content;
  .item {
    float: left;
  }
  &::after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
  }
  @media screen and (min-width: 1920px) {
    .item {
      padding: 20px;
      width: 10%;
    }
    margin: 30px -10px 0 0;
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    .item {
      padding: 20px;
      width: 20%;
    }
    margin: 25px -10px 0 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    .item {
      padding: 16px;
      width: 25%;
    }
    margin: 20px -8px 0 0;
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    .item {
      padding: 8px;
      width: 33%;
    }
    margin: 15px -4px 0 0;
  }
  @media screen and (max-width: 374px) {
    .item {
      padding: 6px;
      width: 50%;
    }
    margin: 10px -3px 0 0;
  }
`
export default PostListContainer
