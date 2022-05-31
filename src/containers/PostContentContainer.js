import styled from "@emotion/styled"
import React from "react"
import InfoBox from "../components/InfoBox/InfoBox"
function PostContentContainer({ postData }) {
  const { title, poster, cover } = postData
  return (
    <PostContentContainerStyle $coverImg={`/cover/${cover}`}>
      <div className="container">
        <div className="poster">
          <img src={`/poster/${poster ? poster : "default.png"}`} alt={title} />
        </div>
        <InfoBox postData={postData} />
      </div>
    </PostContentContainerStyle>
  )
}
const PostContentContainerStyle = styled.section`
  padding: 50px 0;
  position: relative;
  &::before {
    content: "";
    background-image: url(${({ $coverImg }) => ($coverImg ? $coverImg : "")});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.2;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  .container {
    display: flex;
    margin: 0 auto;
    width: 70vw;
    max-width: 1080px;
    gap: 30px;
    align-items: center;
    @media screen and (max-width: 450px) {
      display: block;
    }
    .poster {
      border-radius: 12px;
      overflow: hidden;
      width: 50%;
      position: relative;
      @media screen and (max-width: 450px) {
        width: 100%;
        margin-bottom: 10px;
      }
      flex: 1;
      img {
        display: block;
        width: 100%;
      }
    }
  }
`
export default PostContentContainer
