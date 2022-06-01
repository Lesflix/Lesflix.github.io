import styled from "@emotion/styled"
import React from "react"
import { otts } from "../../const/otts"
import { navigate } from "gatsby"
function OttIcon({ ott, title }) {
  const newTitle = title.split("시즌")[0]
  const ottName = ott.split("&")[0]
  return (
    <IconWrapper>
      <IconStyle>
        {ott ? (
          <a
            href={`${otts[ottName].url}${otts[ottName].query ? newTitle : ""}`}
            target="_blank"
            rel="external"
          >
            <img src={`/ott-icon/${ottName}.svg`} alt={{ ottName }} />
          </a>
        ) : (
          "언제 가져올꺼냐"
        )}
      </IconStyle>
      <div className="price">{ott.split("&")[1]}</div>
    </IconWrapper>
  )
}
const IconWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  .price {
    font-size: inherit;
  }
`
const IconStyle = styled.div`
  width: calc(100 / 375 * 25vw);
  height: calc(100 / 375 * 25vw);
  box-shadow: var(--boxShadow);
  z-index: 30;
  cursor: pointer;
  img {
    width: 100%;
  }
  border-radius: calc(100 / 375 * 25px);
  overflow: hidden;
`
export default OttIcon
