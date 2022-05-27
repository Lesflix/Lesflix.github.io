import styled from "@emotion/styled"
import React, { Fragment } from "react"

function InfoBox({ postData }) {
  const { title, description, genre, release, ott, countries, end } = postData
  return (
    <BoxStyle>
      <div className="title">{title}</div>
      <div className="about">
        <div>
          <strong className="summary">방영일</strong>
          <div className="release">
            {release} ~ {end ? "방영 종료" : ""}
          </div>
        </div>
        <div>
          <strong className="summary">개요</strong>
          <div className="short"> {description}</div>
        </div>
        <div>
          <strong className="summary">보러가기 </strong>
          <div>ott리스트</div>
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
  }
  .summary {
    font-size: 2vw;
  }
`
export default InfoBox
