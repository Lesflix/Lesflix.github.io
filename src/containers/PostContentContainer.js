import styled from "@emotion/styled"
import React from "react"
import InfoBox from "../components/InfoBox/InfoBox"
function PostContentContainer({ postData }) {
  const { title, posterUrl, poster } = postData
  return (
    <PostContentContainerStyle $bgImg={posterUrl}>
      <div className="container">
        <div className="poster">
          <img
            src={
              require(`../images/poster/${poster ? poster : "default.png"}`)
                .default
            }
            alt={title}
          />
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
    background-image: url(${({ $bgImg }) => ($bgImg ? $bgImg : "")});
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
    width: 80vw;
    max-width: 1080px;
    gap: 30px;
    align-items: center;

    .poster {
      z-index: 30;
      border-radius: 12px;
      overflow: hidden;
      width: 50%;
      flex: 1;
      img {
        display: block;
        width: 100%;
      }
    }
  }
`
export default PostContentContainer
