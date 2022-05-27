import styled from "@emotion/styled"
import React from "react"
import PostCard from "../components/PostCard/PostCard"
import { v1 as uuid } from "uuid"
function PostListContainer({ postList }) {
  return (
    <PostListContainerStyle>
      {postList.length
        ? postList.map(post => (
            <div className="item" key={uuid()}>
              <PostCard post={post} />
            </div>
          ))
        : "준비 중"}
    </PostListContainerStyle>
  )
}
const PostListContainerStyle = styled.div`
  margin: 30px auto 0;
  padding: 30px 0;

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
    * {
      width: 10%;
    }
    .item {
      padding: 20px;
    }
    margin-right: -10px;
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    * {
      width: 20%;
    }
    .item {
      padding: 20px;
    }
    margin-right: -10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    * {
      width: 25%;
    }
    .item {
      padding: 16px;
    }
    margin-right: -8px;
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    * {
      width: 33%;
    }
    .item {
      padding: 8px;
    }
    margin-right: -4px;
  }
  @media screen and (max-width: 374px) {
    * {
      width: 50%;
    }
    .item {
      padding: 6px;
    }
    margin-right: -3px;
  }
`
export default PostListContainer
