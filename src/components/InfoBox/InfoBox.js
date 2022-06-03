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
    categories,
    countries,
  } = postData
  return (
    <BoxStyle>
      <div className="title">{title.split("&")[0]}</div>
      <div className="about">
        {title !== originalTitle && (
          <div>
            <strong className="summary">원제</strong>
            <div>{originalTitle}</div>
          </div>
        )}
        <div className="flex">
          <div>
            <strong className="summary">
              {"movie" === genre ? "개봉일" : "방영일"}
            </strong>
            <div>{release}</div>
          </div>
          <div>
            <strong className="summary">국가</strong>
            <div>{countries.join("/")}</div>
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
  width: 50%;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
  .title {
    width: 100%;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .about {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 10px;
    .flex {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
  }
  @media screen and (min-width: 1920px) {
    font-size: 1.6rem;

    .title {
      font-size: 3.4rem;
    }
    .summary {
      font-size: 2.5rem;
    }
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    font-size: 1.4rem;
    .title {
      font-size: 3rem;
    }
    .summary {
      font-size: 2.2rem;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    font-size: 1.6rem;

    .title {
      font-size: 2.6rem;
    }
    .summary {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 1.4rem;

    .title {
      font-size: 2.3rem;
    }
    .summary {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 374px) {
    font-size: 1.4rem;

    .title {
      font-size: 1.8rem;
    }
    .summary {
      font-size: 1.6rem;
    }
  }
`
export default InfoBox
