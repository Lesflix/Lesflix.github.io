import styled from "@emotion/styled"
import React from "react"

function DivContainer({ children }) {
  return <DivContainerStyle>{children}</DivContainerStyle>
}

const DivContainerStyle = styled.div`
  overflow: hidden;
  * {
    color: var(--themFont);
    font-size: 2vw;
  }
  @media screen and (min-width: 1920px) {
    margin: 22px 34px;
  }
  @media screen and (min-width: 1080px) and (max-width: 1919px) {
    margin: 22px 34px;
  }
  @media screen and (min-width: 768px) and (max-width: 1079px) {
    margin: 22px 34px;
  }
  @media screen and (max-width: 767px) {
    margin: 12px;
  }
`
export default DivContainer
