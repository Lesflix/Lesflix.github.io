import styled from "@emotion/styled"
import React from "react"
import OttListContainer from "../../containers/OttListContainer"

function InfoBox({ postData }) {
  const {
    title,
    description,
    release,
    originalTitle,
    genre,
    ott,
    end,
    categories,
  } = postData
  return (
    <BoxStyle>
      <div className="title">{title}</div>
      <div className="about">
        {title !== originalTitle && (
          <div>
            <strong className="summary">원제</strong>
            <div>{originalTitle}</div>
          </div>
        )}
        <div>
          <strong className="summary">
            {"movie" === genre ? "개봉일" : "방영일"}
          </strong>
          <div>
            {release}
            {"drama" === genre && end ? ` ~ 방영 종료` : ""}
            {"movie" === genre && ""}
          </div>
        </div>
        <div>
          <strong className="summary">장르</strong>
          <div> {categories.join("/")}</div>
        </div>
        <div>
          <strong className="summary">개요</strong>
          <div> {description}</div>
        </div>
        <div>
          <strong className="summary">보러가기 </strong>
          <OttListContainer title={title} ottList={ott} />
        </div>
      </div>
    </BoxStyle>
  )
}

const BoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  font-size: 1.2vw;
  width: 50%;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
  .title {
    width: 100%;
    font-size: 3.5vw;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .about {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 10px;

    @media screen and (min-width: 1920px) {
      .summary {
        font-size: 1.6rem;
      }
    }
    @media screen and (min-width: 1080px) and (max-width: 1919px) {
      .summary {
        font-size: 1.4rem;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 1079px) {
      .summary {
        font-size: 1.2rem;
      }
    }
    @media screen and (max-width: 767px) {
      .summary {
        font-size: 1rem;
      }
    }
  }
`
export default InfoBox
