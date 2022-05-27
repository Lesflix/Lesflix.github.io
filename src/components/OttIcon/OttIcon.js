import styled from "@emotion/styled"
import React from "react"
import { otts } from "../../const/otts"
import { navigate } from "gatsby"
function OttIcon({ ott, title }) {
  return (
    <IconStyle>
      {ott ? (
        <img
          onClick={() => {
            navigate(`${otts[ott].url}${otts[ott].query ? title : ""}`)
          }}
          src={require(`../../images/ott-icon/${ott}.svg`).default}
          alt={{ ott }}
        />
      ) : (
        "언제 가져올꺼냐"
      )}
    </IconStyle>
  )
}
const IconStyle = styled.div`
  width: calc(100 / 375 * 25vw);
  height: calc(100 / 375 * 25vw);
  box-shadow: rgba(255, 255, 255, 0.16) 0px 1px 4px;
  cursor: pointer;
  img {
    width: 100%;
  }
  border-radius: calc(100 / 375 * 25px);
  overflow: hidden;
`
export default OttIcon
