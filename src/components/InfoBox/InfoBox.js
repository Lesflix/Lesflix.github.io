import styled from "@emotion/styled"
import React from "react"
import OttListContainer from "../../containers/OttListContainer"

function InfoBox({ postData }) {
  const { title, description, release, genre, ott, end, categories } = postData
  return (
    <BoxStyle>
      <div className="title">{title}</div>
      <div className="about">
        <div>
          <strong className="summary">
            {"drama" === genre ? "방영일" : "개봉일"}
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
  flex: 2;
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
    .summary {
      font-size: 2vw;
    }
  }
`
export default InfoBox
