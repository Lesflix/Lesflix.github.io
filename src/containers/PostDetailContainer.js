import styled from "@emotion/styled"
import React from "react"

function PostContentContainer({ html }) {
  return (
    <DetailContainerStyle>
      <div className="container">
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
      </div>
    </DetailContainerStyle>
  )
}
const DetailContainerStyle = styled.section`
  .container {
    margin: 0 auto;
    width: 70vw;
    max-width: 1080px;
    padding: 10px;
    * {
      color: var(--themFont);
    }
    .bold {
      font-weight: 700;
    }
    @media screen and (min-width: 1920px) {
      font-size: 2.2rem;
      .title {
        font-size: 2.5rem;
      }
    }
    @media screen and (min-width: 1080px) and (max-width: 1919px) {
      font-size: 2rem;
      .title {
        font-size: 2.2rem;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 1079px) {
      font-size: 1.8rem;
      .title {
        font-size: 2rem;
      }
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      font-size: 1.6rem;
      .title {
        font-size: 1.8rem;
      }
    }
    @media screen and (max-width: 374px) {
      font-size: 1.4rem;
      .title {
        font-size: 1.6rem;
      }
    }
  }
`
export default PostContentContainer
